import type { APIContext } from 'astro';

const COOKIE = 'dewy_admin_session';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function secret() {
	return (
		import.meta.env.ADMIN_SESSION_SECRET ||
		process.env.ADMIN_SESSION_SECRET ||
		'dev-only-change-me-dewy-admin'
	);
}

function adminEmail() {
	return import.meta.env.ADMIN_EMAIL || process.env.ADMIN_EMAIL || 'demo@example.com';
}

function adminPassword() {
	return import.meta.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || 'admin123456';
}

async function hmac(payload: string) {
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(secret()),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign'],
	);
	const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
	return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function createSessionToken(email: string) {
	const exp = Date.now() + MAX_AGE * 1000;
	const payload = `${email}|${exp}`;
	const sig = await hmac(payload);
	return `${payload}|${sig}`;
}

export async function verifySessionToken(token: string | undefined) {
	if (!token) return null;
	const parts = token.split('|');
	if (parts.length !== 3) return null;
	const [email, expStr, sig] = parts;
	const exp = Number(expStr);
	if (!email || !exp || Number.isNaN(exp) || Date.now() > exp) return null;
	const expected = await hmac(`${email}|${exp}`);
	if (sig !== expected) return null;
	if (email !== adminEmail()) return null;
	return { email };
}

export function setSessionCookie(cookies: APIContext['cookies'], token: string) {
	cookies.set(COOKIE, token, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: import.meta.env.PROD,
		maxAge: MAX_AGE,
	});
}

export function clearSessionCookie(cookies: APIContext['cookies']) {
	cookies.delete(COOKIE, { path: '/' });
}

export async function getSession(cookies: APIContext['cookies']) {
	return verifySessionToken(cookies.get(COOKIE)?.value);
}

export async function requireAdmin(cookies: APIContext['cookies']) {
	const session = await getSession(cookies);
	if (!session) {
		return new Response(JSON.stringify({ error: '未登录' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}
	return null;
}

export function validateCredentials(email: string, password: string) {
	return email === adminEmail() && password === adminPassword();
}

export { COOKIE, adminEmail };

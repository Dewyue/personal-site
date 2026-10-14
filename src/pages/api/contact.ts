import type { APIRoute } from 'astro';
import { createMessage } from '../../lib/cms/messages';

export const prerender = false;

const recentByIp = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

function clientIp(request: Request) {
	return (
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
		request.headers.get('x-real-ip') ||
		'unknown'
	);
}

function allow(ip: string) {
	const now = Date.now();
	const prev = (recentByIp.get(ip) || []).filter((t) => now - t < WINDOW_MS);
	if (prev.length >= MAX_PER_WINDOW) {
		recentByIp.set(ip, prev);
		return false;
	}
	prev.push(now);
	recentByIp.set(ip, prev);
	return true;
}

export const POST: APIRoute = async ({ request }) => {
	if (!allow(clientIp(request))) {
		return json({ error: '发送过于频繁，请稍后再试' }, 429);
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json({ error: '请求无效' }, 400);
	}

	// Honeypot
	if (String(body.company || '').trim()) {
		return json({ ok: true });
	}

	const name = String(body.name || '').trim();
	const email = String(body.email || '').trim();
	const message = String(body.message || '').trim();
	const intent = body.intent === 'resume' ? 'resume' : 'general';

	if (!name || name.length > 80) return json({ error: '请填写称呼（80 字以内）' }, 400);
	if (!email || email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: '请填写有效邮箱' }, 400);
	}
	if (!message || message.length < 4 || message.length > 2000) {
		return json({ error: '留言请写 4–2000 字' }, 400);
	}

	await createMessage({ name, email, intent, body: message });
	return json({ ok: true });
};

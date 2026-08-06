import type { APIRoute } from 'astro';
import { createSessionToken, setSessionCookie, validateCredentials } from '../../../lib/cms/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const form = await request.formData();
	const email = String(form.get('email') || '');
	const password = String(form.get('password') || '');

	if (!validateCredentials(email, password)) {
		return redirect('/admin/login?error=invalid');
	}

	const token = await createSessionToken(email);
	setSessionCookie(cookies, token);
	return redirect('/admin');
};

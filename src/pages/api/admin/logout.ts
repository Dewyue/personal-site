import type { APIRoute } from 'astro';
import { clearSessionCookie } from '../../../lib/cms/auth';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, redirect }) => {
	clearSessionCookie(cookies);
	return redirect('/admin/login');
};

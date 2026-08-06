import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/cms/auth';

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;

	if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
		const session = await getSession(context.cookies);
		if (!session) {
			return context.redirect(`/admin/login?next=${encodeURIComponent(pathname)}`);
		}
		context.locals.adminEmail = session.email;
	}

	return next();
});

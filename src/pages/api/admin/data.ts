import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../lib/cms/auth';
import {
	listMovies,
	listProjects,
	listSkills,
	listTimeline,
	readStore,
	saveMovies,
	saveProjects,
	saveSkills,
	saveTimeline,
	updateCinemaCopy,
	updateProfile,
} from '../../../lib/cms/store';
import type { Movie, Profile, Project, Skill, TimelineItem } from '../../../lib/cms/types';

export const prerender = false;

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const GET: APIRoute = async ({ cookies, url }) => {
	const denied = await requireAdmin(cookies);
	if (denied) return denied;

	const resource = url.searchParams.get('resource') || 'store';

	switch (resource) {
		case 'movies':
			return json(await listMovies());
		case 'skills':
			return json(await listSkills());
		case 'projects':
			return json(await listProjects());
		case 'timeline':
			return json(await listTimeline());
		default:
			return json(await readStore());
	}
};

export const PUT: APIRoute = async ({ cookies, request, url }) => {
	const denied = await requireAdmin(cookies);
	if (denied) return denied;

	const resource = url.searchParams.get('resource');
	const body = await request.json();

	try {
		switch (resource) {
			case 'profile':
				return json(await updateProfile(body as Profile));
			case 'cinema':
				await updateCinemaCopy(String(body.intro || ''), String(body.habit || ''));
				return json({ ok: true });
			case 'movies':
				return json(await saveMovies(body as Movie[]));
			case 'skills':
				return json(await saveSkills(body as Skill[]));
			case 'projects':
				return json(await saveProjects(body as Project[]));
			case 'timeline':
				return json(await saveTimeline(body as TimelineItem[]));
			default:
				return json({ error: '未知资源' }, 400);
		}
	} catch (error) {
		console.error(error);
		return json({ error: '保存失败' }, 500);
	}
};

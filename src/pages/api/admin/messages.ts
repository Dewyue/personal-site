import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../lib/cms/auth';
import { listMessages, updateMessage } from '../../../lib/cms/messages';

export const prerender = false;

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const GET: APIRoute = async ({ cookies }) => {
	const denied = await requireAdmin(cookies);
	if (denied) return denied;
	return json(await listMessages());
};

export const PATCH: APIRoute = async ({ cookies, request }) => {
	const denied = await requireAdmin(cookies);
	if (denied) return denied;

	const body = await request.json();
	const id = String(body.id || '');
	if (!id) return json({ error: '缺少 id' }, 400);

	const status = body.status as 'unread' | 'read' | 'replied' | undefined;
	const adminNote = body.adminNote != null ? String(body.adminNote) : undefined;

	const updated = await updateMessage(id, {
		...(status ? { status } : {}),
		...(adminNote !== undefined ? { adminNote } : {}),
	});
	if (!updated) return json({ error: '未找到留言' }, 404);
	return json(updated);
};

import type { Locale } from '../i18n';

export type CodeProject = {
	id: string;
	github: string;
	/** Fallback when GitHub is unreachable */
	stack: string;
	zh: { title: string; description: string };
	en: { title: string; description: string };
};

export type LocalizedCodeProject = {
	id: string;
	github: string;
	stack: string;
	title: string;
	description: string;
};

/** Coding projects in 项目集 — titles stay local; description/stack sync from GitHub About. */
export const codeProjects: CodeProject[] = [
	{
		id: 'campusreuse',
		github: 'https://github.com/Dewyue/campusreuse',
		stack: 'JavaScript',
		zh: {
			title: '中南闲集',
			description: '中南大学可持续设计课程：校内闲置物品再使用服务系统。',
		},
		en: {
			title: 'Campus Reuse',
			description: 'CSU sustainable design course: a campus reuse service for idle goods.',
		},
	},
	{
		id: 'qiuzhao-schedule',
		github: 'https://github.com/Dewyue/qiuzhao-schedule',
		stack: 'TypeScript',
		zh: {
			title: '秋招日程',
			description: '占用和空闲同等可见，一眼看出哪段能排、哪场撞车。本机存储，可导出 JSON。',
		},
		en: {
			title: 'Autumn Recruit Schedule',
			description: 'Occupied and free time side by side — see what you can book and what clashes. Local-first, exportable JSON.',
		},
	},
	{
		id: 'brief-agent',
		github: 'https://github.com/Dewyue/brief-agent',
		stack: 'HTML',
		zh: {
			title: 'Brief Agent',
			description: '一页需求简报 Agent，把模糊想法收成可交付的 brief。',
		},
		en: {
			title: 'Brief Agent',
			description: 'A one-page brief agent that turns fuzzy ideas into a shippable brief.',
		},
	},
	{
		id: 'diary',
		github: 'https://github.com/Dewyue/diary',
		stack: 'TypeScript',
		zh: {
			title: '个人日记',
			description: '页内直写直改、滑动切日、月历与标签查找；数据仅存本机。',
		},
		en: {
			title: 'Personal Diary',
			description: 'Write in place, swipe days, find by calendar or tags. Data stays on your device.',
		},
	},
];

type GithubMeta = {
	description: string | null;
	language: string | null;
};

const CACHE_TTL_MS = 15 * 60 * 1000;
const metaCache = new Map<string, { at: number; meta: GithubMeta | null }>();

function ownerRepo(github: string): { owner: string; repo: string } | null {
	try {
		const u = new URL(github);
		const [, owner, repo] = u.pathname.split('/');
		if (!owner || !repo) return null;
		return { owner, repo: repo.replace(/\.git$/, '') };
	} catch {
		return null;
	}
}

async function fetchGithubMeta(github: string): Promise<GithubMeta | null> {
	const cached = metaCache.get(github);
	if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
		return cached.meta;
	}

	const parts = ownerRepo(github);
	if (!parts) {
		metaCache.set(github, { at: Date.now(), meta: null });
		return null;
	}

	const headers: Record<string, string> = {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'dewyue-personal-site',
		'X-GitHub-Api-Version': '2022-11-28',
	};
	const token =
		import.meta.env.GITHUB_TOKEN ||
		process.env.GITHUB_TOKEN ||
		import.meta.env.GH_TOKEN ||
		process.env.GH_TOKEN;
	if (token) headers.Authorization = `Bearer ${token}`;

	try {
		const res = await fetch(`https://api.github.com/repos/${parts.owner}/${parts.repo}`, {
			headers,
		});
		if (!res.ok) {
			metaCache.set(github, { at: Date.now(), meta: cached?.meta ?? null });
			return cached?.meta ?? null;
		}
		const data = (await res.json()) as { description?: string | null; language?: string | null };
		const meta: GithubMeta = {
			description: data.description?.trim() || null,
			language: data.language?.trim() || null,
		};
		metaCache.set(github, { at: Date.now(), meta });
		return meta;
	} catch {
		metaCache.set(github, { at: Date.now(), meta: cached?.meta ?? null });
		return cached?.meta ?? null;
	}
}

export async function getCodeProjects(locale: Locale): Promise<LocalizedCodeProject[]> {
	const metas = await Promise.all(codeProjects.map((p) => fetchGithubMeta(p.github)));

	return codeProjects.map((project, i) => {
		const copy = locale === 'en' ? project.en : project.zh;
		const meta = metas[i];
		return {
			id: project.id,
			github: project.github,
			stack: meta?.language || project.stack,
			title: copy.title,
			// GitHub About is the live source; local copy is offline fallback.
			description: meta?.description || copy.description,
		};
	});
}

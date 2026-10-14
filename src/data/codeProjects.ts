import type { Locale } from '../i18n';

export type CodeProject = {
	id: string;
	github: string;
	stack: string;
	zh: { title: string; description: string };
	en: { title: string; description: string };
};

/** Coding projects shown in 项目集 — link to GitHub for now. */
export const codeProjects: CodeProject[] = [
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
		id: 'diary',
		github: 'https://github.com/Dewyue/diary',
		stack: 'TypeScript',
		zh: {
			title: '本地日记',
			description: '页内直写直改、滑动切日、月历与标签查找；数据仅存本机。',
		},
		en: {
			title: 'Local Diary',
			description: 'Write in place, swipe days, find by calendar or tags. Data stays on your device.',
		},
	},
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
];

export function localizeCodeProject(project: CodeProject, locale: Locale) {
	const copy = locale === 'en' ? project.en : project.zh;
	return {
		id: project.id,
		github: project.github,
		stack: project.stack,
		title: copy.title,
		description: copy.description,
	};
}

export function getCodeProjects(locale: Locale) {
	return codeProjects.map((p) => localizeCodeProject(p, locale));
}

import type { CmsStore } from './types';

/** Map CMS store into shapes the public site already expects. */
export function toSiteFromStore(store: CmsStore) {
	const p = store.profile;
	return {
		name: p.name,
		title: p.title,
		tagline: p.tagline,
		description: p.description,
		url: 'https://wangyue-dewy.vercel.app',
		locale: 'zh-CN' as const,
		avatar: p.avatar,
		email: p.email,
		phone: p.phone,
		location: p.location,
		social: {
			github: p.github,
			instagram: p.instagram,
			xiaohongshu: p.xiaohongshu,
			douyin: p.douyin,
			linkedin: p.linkedin,
			wechat: p.wechat,
		},
	};
}

export function toAboutFromStore(store: CmsStore) {
	return {
		intro: store.profile.aboutIntro,
		paragraphs: store.profile.aboutParagraphs,
	};
}

export function toSkillsFromStore(store: CmsStore) {
	return store.skills
		.slice()
		.sort((a, b) => a.sort - b.sort)
		.map((s) => ({ name: s.name, level: s.level }));
}

export function toMoviesFromStore(store: CmsStore) {
	return store.movies
		.filter((m) => m.visible)
		.slice()
		.sort((a, b) => a.rank - b.rank)
		.map((m) => ({
			rank: m.rank,
			title: m.title,
			titleEn: m.titleEn,
			year: m.year,
			poster: m.poster,
			imdb: m.imdb,
		}));
}

export function toProjectsFromStore(store: CmsStore) {
	return store.projects
		.filter((p) => p.visible)
		.slice()
		.sort((a, b) => a.sort - b.sort)
		.map((p) => ({
			id: p.id,
			number: p.number,
			title: p.title,
			category: p.category,
			summary: p.summary,
			cover: p.cover,
			startPage: p.startPage,
			endPage: p.endPage,
		}));
}

export function toTimelineFromStore(store: CmsStore) {
	return store.timeline
		.slice()
		.sort((a, b) => a.sort - b.sort)
		.map((t) => ({
			category: t.category,
			year: t.year,
			title: t.title,
			company: t.company,
			description: t.description,
		}));
}

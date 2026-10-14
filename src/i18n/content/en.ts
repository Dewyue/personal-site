import { lifeMovies as zhMovies } from '../../data/cinema';
import { portfolioProjects as zhProjects } from '../../data/portfolio';
import { site as zhSite } from '../../data/site';

export const enSite = {
	name: 'Dewy',
	englishName: 'Dewy',
	sloganLines: ['Just do it', 'Just Dewy'] as const,
	title: 'FDE · AI-native design engineering',
	tagline:
		'I use design and engineering together to turn business problems into products that actually ship — whether the experience holds up, and whether it can be delivered.',
	description:
		"Dewy (Wang Yue)'s personal site — Forward Deployed Engineer. Design systems and AI-native delivery: from insight to Web, mini programs, and ops dashboards.",
	url: zhSite.url,
	locale: 'en' as const,
	avatar: zhSite.avatar,
	email: zhSite.email,
	phone: zhSite.phone,
	location: 'Shanghai, China',
	social: { ...zhSite.social },
};

export const enAboutStory = {
	intro:
		"Hi, I'm Dewy (Wang Yue) — a Forward Deployed Engineer. I use design and engineering together to turn business problems into products that actually ship.",
	paragraphs: [
		"I'm currently an FDE at a tech consulting firm, while doing interaction design and front-end for an education-tech business: multi-brand design systems, parent H5 / mini-program conversion UX, and Soft Ops dashboards — with Cursor Agent Skills that keep delivery reusable.",
		'Earlier work spans AI products and design practice: dialect corpus and strategy at Xiaohongshu, Prompt Engineering for Jimeng video models at ByteDance, scenario research for a GAC future concept vehicle, and the commissioned memoir Shuzhai yu Renjian end to end.',
		"Outside work I dive, climb, dance popping and waacking, play guitar, and love film, coffee, board games, and improv comedy. Playing seriously trains the same sense of rhythm, detail, and presence. If you'd like to collaborate, I'd love to hear from you.",
	],
};

export const enContactInfo = {
	intro: 'Project collab, technical exchange, or career opportunity? Feel free to reach out.',
	responseTime: 'I usually reply within 1–2 business days.',
	availability: 'Open to remote freelance and consulting.',
};

export const enSkillCategories = [
	{
		title: 'FDE delivery',
		items: [
			'On-site requirement breakdown',
			'Design → code → ship',
			'Soft Ops dashboards',
			'H5 / WeChat mini programs',
			'CloudBase / CDN release',
		],
	},
	{
		title: 'Design systems & brand',
		items: [
			'Multi-brand visual systems',
			'Figma tokens / components',
			'IP & marketing assets',
			'Conversion-flow visuals',
			'Aesthetic eval & iteration',
		],
	},
	{
		title: 'AI-native workflow',
		items: [
			'Cursor Agent Skills',
			'Spec / acceptance criteria',
			'Reusable PE & SOPs',
			'Daily stakeholder worklogs',
			'Prompt Engineering',
		],
	},
] as const;

export const enTimeline = [
	{
		category: 'Work',
		year: '2026.6 — Present',
		title: 'Forward Deployed Engineer',
		company: 'Tech consulting company (confidential)',
		description:
			'Embedded FDE for client delivery: turn ambiguous requests into shippable scope and production releases. Local-preview-before-production discipline; Cursor Agent Skills that encode design language, acceptance checks, and repeatable delivery steps into an AI-native workflow.',
	},
	{
		category: 'Work',
		year: '2026.6 — Present',
		title: 'Interaction Design · Front-end',
		company: 'Education-tech company (confidential)',
		description:
			'Own multi-brand design systems and UI consistency (marketing / IP / contract surfaces); design parent H5 / mini-program conversion flows and critical-path UX; structure Soft Ops dashboard IA and emphasis — and ship the related front-end interfaces into real use.',
	},
	{
		category: 'Education',
		year: 'Class of 2027',
		title: 'Undergraduate',
		company: 'Central South University',
		description:
			'Product Design major, 2023 intake. Core courses: Design Psychology, Intelligent Interaction Design, Design Process & Methods, User Research, Product Form Design, Service Design, and more.',
	},
	{
		category: 'Internships',
		year: '2025.8',
		title: 'AI Corpus Training Intern',
		company: 'Xiaohongshu',
		description:
			'Worked on Xiaohongshu’s dialect AI project, labeling and refining Shanghainese corpus and strategy. Mapped real-world expression habits and deeper preferences to ground model training in authentic communication.',
	},
	{
		category: 'Internships',
		year: '2025.9 — 2025.12',
		title: 'PE Engineer',
		company: 'ByteDance',
		description:
			'Contributed to training and iteration of Jimeng’s Seedance 4.0 video model. Built Prompt Engineering strategies from product aesthetics and UX, tuning camera, light, material, and narrative across multimodal dimensions.',
	},
	{
		category: 'Projects',
		year: '2025.9 — 2025.10',
		title: 'Mobility concept design',
		company: 'GAC · From Future to Future',
		description:
			'Led scenario and user research for a GAC future concept vehicle, turning social trends into design language and feature definition, and delivering the full concept narrative. Advanced to the national top seven with mentor recognition from GAC and OPSH.',
	},
	{
		category: 'Projects',
		year: '2026.3 — 2026.4',
		title: 'Independent designer (commission)',
		company: 'Book · Shuzhai yu Renjian',
		description:
			'Commissioned by an elder-care company to design a personal memoir. Owned interviews, structure, layout system, and cover craft end to end — aging-friendly visuals and restrained materiality for a dignified narrative object.',
	},
	{
		category: 'Workshops / Academic',
		year: '2025.10',
		title: 'International workshop · Future smart home',
		company: 'Central South University × Chiba University',
		description:
			'Joined an international design workshop led by Prof. Makoto Watanabe (Chiba University), imagining home life forty years ahead and delivering concept-to-model work with an interdisciplinary team.',
	},
	{
		category: 'Workshops / Academic',
		year: '2025.11',
		title: 'International workshop · Design policy',
		company: 'Hunan University',
		description:
			'Participated in a workshop with Dr. Gisele Raulik Murphy on practical tools for sustainable development among BRICS countries, studying policy for, through, and in design.',
	},
	{
		category: 'Workshops / Academic',
		year: '2026.4',
		title: 'TRAE AI Coding Hackathon',
		company: 'Central South University',
		description:
			'First solo campus vibe-coding hackathon — shipping an interactive prototype under time pressure with AI-assisted natural-language programming.',
	},
] as const;

export const enInterestGroups = [
	{ id: 'move', label: 'Get moving', en: 'Move' },
	{ id: 'game', label: 'Play a round', en: 'Play' },
	{ id: 'laugh', label: 'Have a laugh', en: 'Laugh' },
	{ id: 'think', label: 'Think it through', en: 'Think' },
	{ id: 'feel', label: 'Take it in', en: 'Feel' },
] as const;

export const enInterests = [
	{
		name: 'Diving',
		note: 'Underwater',
		sub: 'Scuba / Freediving',
		group: 'move',
		blurb: 'Slowing the rhythm underwater — breath and focus as practice.',
		span: 'wide' as const,
	},
	{
		name: 'Street dance',
		note: 'Dance',
		sub: 'Popping / Waacking / Afro',
		group: 'move',
		blurb: 'Finding the beat with the body — turning improvisation into craft.',
		span: 'normal' as const,
	},
	{
		name: 'Climbing',
		note: 'Climbing',
		group: 'move',
		blurb: 'Each route is a puzzle; feel matters more than force.',
		span: 'normal' as const,
	},
	{
		name: 'Travel',
		note: 'Travel',
		group: 'move',
		blurb: 'A new city recalibrates how I notice the everyday.',
		span: 'wide' as const,
	},
	{
		name: 'Board games',
		note: 'Board games',
		group: 'game',
		blurb: 'Social play inside rules — strategy and laughter both count.',
		span: 'normal' as const,
	},
	{
		name: 'Chess',
		note: 'Chess',
		group: 'game',
		blurb: 'Sixty-four squares of calculation — judgment over the result.',
		span: 'normal' as const,
	},
	{
		name: 'Billiards',
		note: 'Billiards',
		group: 'game',
		blurb: 'One line, one angle — patience down to the millimeter.',
		span: 'normal' as const,
	},
	{
		name: 'Improv comedy',
		note: 'Improv',
		group: 'laugh',
		blurb: 'I watch from the seats — the surprises land better than a script.',
		span: 'wide' as const,
	},
	{
		name: 'Podcasts',
		note: 'Podcasts',
		group: 'laugh',
		blurb: 'Social topics, delivered by hosts who stay unseriously funny.',
		span: 'normal' as const,
	},
	{
		name: 'Cinema',
		note: 'Cinema',
		group: 'think',
		blurb: 'How stories are told — and how light and shadow speak.',
		span: 'wide' as const,
		href: '/interests/cinema',
	},
	{
		name: 'Reading',
		note: 'Reading',
		group: 'think',
		blurb: 'The lightest kind of travel, and the quietest conversation.',
		span: 'normal' as const,
	},
	{
		name: 'Acoustic guitar',
		note: 'Acoustic',
		group: 'feel',
		blurb: 'Tone under the fingertips — slow is fine.',
		span: 'wide' as const,
	},
	{
		name: 'Coffee',
		note: 'Coffee',
		group: 'feel',
		blurb: 'From bean to cup — a small ritual worth repeating.',
		span: 'normal' as const,
	},
] as const;

export const enCinemaPage = {
	title: 'Cinema',
	en: 'Cinema',
	description: 'The theater experience, IMAX, and a few life movies.',
	intro: 'Watching a film is taking in story, light, and feeling in one sitting.',
	habit: 'I care about the viewing experience — theaters when I can, especially IMAX.',
};

export const enMovies = zhMovies.map((m) => ({
	...m,
	displayTitle: m.titleEn,
	displayTitleSecondary: m.title,
}));

export const enProjects = zhProjects.map((p) => {
	const map: Record<string, { title: string; category: string; summary: string }> = {
		tidal: {
			title: 'From Future to Future',
			category: 'Mobility concept design',
			summary:
				'GAC future mobility — HYPTEC TIDAL, a tidal-powered concept craft for a Greater Bay Area waterfront metropolis.',
		},
		thermos: {
			title: 'Thermos structure design',
			category: 'Industrial product structure',
			summary:
				'From exploded views to engineering drawings — structure logic, part relationships, and material detail for an insulated vessel.',
		},
		charger: {
			title: 'EV charger form design',
			category: 'Industrial product form',
			summary:
				'Form language and material expression for charging contexts — how energy hardware can feel at home in daily space.',
		},
		smarthome: {
			title: 'Future Smart Home',
			category: 'Smart home',
			summary:
				'International workshop outcome: imagining living forty years ahead — from concept to spatial section and handmade model.',
		},
	};
	const t = map[p.id];
	return {
		...p,
		title: t?.title ?? p.title,
		category: t?.category ?? p.category,
		summary: t?.summary ?? p.summary,
	};
});

export const enSkills = [
	{ name: 'Figma design systems', level: 92 },
	{ name: 'Cursor / AI Coding', level: 90 },
	{ name: 'Soft Ops / dashboard UX', level: 88 },
	{ name: 'H5 / Mini programs', level: 85 },
	{ name: 'Brand & IP', level: 88 },
	{ name: 'CloudBase deploy', level: 80 },
	{ name: 'Prompt Engineering', level: 90 },
	{ name: 'Aesthetic eval', level: 85 },
] as const;

export const site = {
	name: '王悦',
	title: '全栈开发者 · 产品设计师',
	tagline: '用代码与设计，构建有温度的数字体验',
	description:
		'王悦的个人网站 — 全栈开发、产品设计、技术写作。专注于 Web 应用、设计系统与开源项目。',
	url: 'https://dewy-dewyue1.vercel.app',
	locale: 'zh-CN',
	avatar: '/avatar.svg',
	email: 'hello@example.com',
	location: '上海，中国',
	social: {
		github: 'https://github.com/Dewyue',
		twitter: 'https://twitter.com/example',
		linkedin: 'https://linkedin.com/in/example',
		wechat: 'Dewyue',
	},
} as const;

export const nav = [
	{ label: '首页', href: '/' },
	{ label: '关于', href: '/about' },
	{ label: '作品', href: '/projects' },
	{ label: '博客', href: '/blog' },
	{ label: '联系', href: '/contact' },
] as const;

export const skills = [
	{ name: 'TypeScript', level: 90 },
	{ name: 'React / Vue', level: 85 },
	{ name: 'Node.js', level: 80 },
	{ name: 'Astro', level: 85 },
	{ name: 'Tailwind CSS', level: 90 },
	{ name: 'Figma', level: 75 },
	{ name: 'PostgreSQL', level: 70 },
	{ name: 'Docker', level: 65 },
] as const;

export const skillCategories = [
	{
		title: '前端开发',
		items: ['TypeScript', 'React', 'Vue', 'Astro', 'Tailwind CSS', 'Web Performance'],
	},
	{
		title: '后端与基础设施',
		items: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD', 'REST / GraphQL'],
	},
	{
		title: '设计与产品',
		items: ['Figma', '设计系统', '用户体验', '原型设计', '信息架构'],
	},
] as const;

export const timeline = [
	{
		year: '2024 — 至今',
		title: '高级全栈工程师',
		company: '某科技公司',
		description: '负责核心产品的前端架构与性能优化，主导设计系统建设。',
	},
	{
		year: '2021 — 2024',
		title: '前端开发工程师',
		company: '某互联网公司',
		description: '参与多个 B 端 SaaS 产品的开发与迭代，推动组件库标准化。',
	},
	{
		year: '2018 — 2021',
		title: '计算机科学学士',
		company: '某大学',
		description: '主修软件工程，参与 ACM 竞赛与开源社区贡献。',
	},
] as const;

export const aboutStory = {
	intro:
		'你好，我是王悦。我是一名热爱技术与设计的全栈开发者，相信好的产品是工程能力与审美直觉的结合。',
	paragraphs: [
		'从大学时期开始接触编程，我逐渐发现写代码不仅是解决问题，更是一种创造性的表达。过去几年，我在创业公司和大厂都工作过，积累了从 0 到 1 构建产品、以及在大规模系统中优化体验的完整经验。',
		'工作之余，我喜欢写技术博客、参与开源项目，也会花时间研究 UI/UX 趋势。我相信持续学习是开发者最重要的能力。',
		'如果你对我的作品感兴趣，或者想聊聊合作机会，欢迎通过联系页面与我取得联系。',
	],
} as const;

export const contactInfo = {
	intro: '有项目合作、技术交流或职业机会？欢迎随时联系我。',
	responseTime: '通常会在 1-2 个工作日内回复。',
	availability: '目前开放远程兼职与咨询合作。',
} as const;

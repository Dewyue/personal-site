export const site = {
	name: '王悦',
	title: '全栈开发者 · 产品设计师',
	tagline: '用代码与设计，构建有温度的数字体验',
	description:
		'王悦的个人网站 — 全栈开发、产品设计、技术写作。专注于 Web 应用、设计系统与开源项目。',
	url: 'https://wangyue-dewy.vercel.app',
	locale: 'zh-CN',
	avatar: '/avatar.webp?v=14',
	email: 'iKevinAyuso@163.com',
	phone: '13787007885',
	location: '上海，中国',
	social: {
		github: 'https://github.com/Dewyue',
		instagram: 'https://www.instagram.com/dewy_justdoit/',
		xiaohongshu: 'https://xhslink.cn/m/5GTFXIU0yUN',
		douyin: 'https://v.douyin.com/2y9Lx_T78Hc/',
		linkedin: 'https://linkedin.com/in/example',
		wechat: 'Dewyue',
	},
} as const;

export const nav = [
	{ label: '首页', href: '/' },
	{ label: '关于', href: '/about' },
	{ label: '兴趣', href: '/interests' },
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
		category: '实习经历',
		year: '2025.8',
		title: 'AI 语料训练实习生',
		company: '小红书',
		description:
			'参与小红书方言 AI 项目，负责沪语方言区的语料标注与策略优化。结合实际使用场景，识别并提炼方言用户的表达习惯与深层偏好，为模型训练提供关键的用户洞察，推动语音交互体验更贴近真实沟通。',
	},
	{
		category: '实习经历',
		year: '2025.9 — 2025.12',
		title: 'PE 工程师',
		company: '字节跳动',
		description:
			'深度参与即梦 AI 视频大模型（Seedance 4.0）的训练与迭代。从产品审美与用户体验出发，系统性构建 Prompt Engineering 策略，对运镜、光影、材质、叙事逻辑等多模态维度精细化调校，将抽象设计审美转化为模型可理解的指令。',
	},
	{
		category: '项目经历',
		year: '2025.9 — 2025.10',
		title: '交通工具概念设计',
		company: '广汽集团「从未来到未来」',
		description:
			'在广汽未来概念车项目中主导场景与用户研究，洞察未来城市出行中的情感触点，将社会趋势转化为设计语言与功能定义，并完成概念方案全流程表达。成果获 GAC 与 OPSH 导师认可，晋级全国七强。',
	},
	{
		category: '项目经历',
		year: '2026.3 — 2026.4',
		title: '独立设计师（商业委托）',
		company: '书籍《书斋与人间》',
		description:
			'受老年照料公司委托，为长者设计个人回忆录。独立完成从前期访谈、素材梳理到书籍结构、版式系统及封面工艺的全案设计。以「有温度的叙事」为理念，通过适老化视觉系统与克制的质感表达，将个体记忆转化为有尊严的设计成品。',
	},
	{
		category: '工作坊 / 学术',
		year: '2025.10',
		title: '国际设计工作坊 · 未来智慧家居',
		company: '中南大学 × 千叶大学',
		description:
			'参与由日本千叶大学渡边诚教授主导的国际联合设计工作坊，畅想未来四十年后的家居，与跨学科团队合作，围绕未来智慧生活场景，完成从概念构想到手作建筑模型的全流程设计。',
	},
	{
		category: '工作坊 / 学术',
		year: '2025.11',
		title: '国际设计工作坊 · 设计政策构建',
		company: '湖南大学',
		description:
			'参与由巴西设计政策专家 Gisele Raulik Murphy 博士主持的「推动金砖国家可持续发展的实用工具设计」学术工作坊，系统研讨「为设计的政策、通过设计的政策、设计中的政策」三层次框架。',
	},
	{
		category: '工作坊 / 学术',
		year: '2026.4',
		title: 'TRAE AI Coding Hackathon',
		company: '中南大学',
		description:
			'首次个人参与校园 Vibe Coding 黑客松，借助 AI 驱动的自然语言编程工具，在极限时间内完成交互原型的快速开发。',
	},
] as const;

export const aboutStory = {
	intro:
		'你好，我是王悦（Dewy）。我是一名全栈开发者与产品设计师，习惯同时用代码和设计语言想问题——既关心系统怎么跑通，也关心体验落在人身上的触感。',
	paragraphs: [
		'最近一段经历横跨 AI 产品与设计实践：在小红书做方言语料与策略优化，在字节跳动参与即梦视频大模型的 Prompt Engineering；也主导过广汽未来概念车的场景研究与方案表达，并独立完成商业委托书籍《书斋与人间》的全案设计。',
		'我在中南大学参与国际设计工作坊与 AI Coding 黑客松，也持续用 Cursor、Figma、Rhino 等工具把想法快速做成可感知的原型。对我来说，工程是落地的路径，设计是判断的标准。',
		'工作之外，我潜水、攀岩、跳街舞、弹吉他，也爱电影、咖啡、桌游和即兴喜剧。认真玩，同样训练我对节奏、细节和临场的敏感。如果你想交流项目或合作，欢迎联系我。',
	],
} as const;

export const contactInfo = {
	intro: '有项目合作、技术交流或职业机会？欢迎随时联系我。',
	responseTime: '通常会在 1-2 个工作日内回复。',
	availability: '目前开放远程兼职与咨询合作。',
} as const;

export const interests = [
	{
		name: '潜水',
		note: 'Underwater',
		group: '身体',
		blurb: '在水下把节奏放慢，练习呼吸与专注。',
		span: 'wide' as const,
	},
	{
		name: '攀岩',
		note: 'Climbing',
		group: '身体',
		blurb: '一条线路一种解题方式，手感比蛮力更重要。',
		span: 'normal' as const,
	},
	{
		name: '跳街舞',
		note: 'Hip-hop',
		group: '身体',
		blurb: '用身体找节拍，把即兴变成可控的表达。',
		span: 'normal' as const,
	},
	{
		name: '旅行',
		note: 'Travel',
		group: '身体',
		blurb: '换一座城市，重新校准对日常的敏感度。',
		span: 'normal' as const,
	},
	{
		name: '电影',
		note: 'Cinema',
		group: '感官',
		blurb: '看别人怎么讲故事，也看光影怎么说话。',
		span: 'normal' as const,
	},
	{
		name: '咖啡',
		note: 'Coffee',
		group: '感官',
		blurb: '从豆子到杯子，喜欢可重复的小仪式。',
		span: 'normal' as const,
	},
	{
		name: '看书',
		note: 'Reading',
		group: '感官',
		blurb: '文字是最轻便的远行，也是最安静的对话。',
		span: 'wide' as const,
	},
	{
		name: '听播客',
		note: 'Podcasts',
		group: '感官',
		blurb: '走路、通勤时，把别人的思考装进口袋。',
		span: 'normal' as const,
	},
	{
		name: '木吉他',
		note: 'Acoustic',
		group: '表达',
		blurb: '指尖上的音色练习，慢也没关系。',
		span: 'normal' as const,
	},
	{
		name: '看即兴喜剧',
		note: 'Improv',
		group: '表达',
		blurb: '接受意外，把临场反应练成一种肌肉记忆。',
		span: 'wide' as const,
	},
	{
		name: '桌游',
		note: 'Board games',
		group: '表达',
		blurb: '规则里的社交，策略和笑声一样重要。',
		span: 'normal' as const,
	},
	{
		name: '台球',
		note: 'Billiards',
		group: '表达',
		blurb: '一条直线、一个角度，把耐心落到毫米。',
		span: 'normal' as const,
	},
] as const;

export const interestGroups = [
	{ id: '身体', label: '身体与行动', en: 'Body' },
	{ id: '感官', label: '感官与日常', en: 'Sense' },
	{ id: '表达', label: '表达与社交', en: 'Play' },
] as const;

export const site = {
	name: '王悦',
	englishName: 'Dewy',
	sloganLines: ['Just do it', 'Just Dewy'] as const,
	title: 'FDE · AI Native 设计工程',
	tagline: '用设计与工程把业务问题做成可上线的产品——既关心体验是否说得通，也关心它能不能稳定交付。',
	description:
		'王悦的个人网站 — Forward Deployed Engineer，设计系统与 AI Native 交付。驻场式把洞察落地为 Web、小程序与运营后台。',
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
	{ label: '作品', href: '/projects' },
	{ label: '兴趣', href: '/interests' },
	{ label: '联系', href: '/contact' },
] as const;

export const skills = [
	{ name: 'Figma 设计系统', level: 92 },
	{ name: 'Cursor / AI Coding', level: 90 },
	{ name: 'Soft Ops / 后台 UX', level: 88 },
	{ name: 'H5 / 小程序', level: 85 },
	{ name: '品牌与 IP', level: 88 },
	{ name: 'CloudBase 部署', level: 80 },
	{ name: 'Prompt Engineering', level: 90 },
	{ name: '审美 Eval', level: 85 },
] as const;

export const skillCategories = [
	{
		title: 'FDE 交付',
		items: ['驻场需求拆解', '设计 → 代码 → 上线', '运营后台 Soft Ops', 'H5 / 微信小程序', 'CloudBase / CDN 发布'],
	},
	{
		title: '设计系统与品牌',
		items: ['多品牌视觉体系', 'Figma Tokens / 组件', 'IP 与宣传物料', '转化链路视觉', '审美评测与迭代'],
	},
	{
		title: 'AI Native 工作流',
		items: ['Cursor Agent Skills', 'Spec / 验收标准', '可复用 PE 与 SOP', '日更协作工作日志', 'Prompt Engineering'],
	},
] as const;

export const timeline = [
	{
		category: '工作经历',
		year: '2026.6 — 至今',
		title: 'Forward Deployed Engineer',
		company: '某科技咨询公司',
		description:
			'以驻场 FDE 方式嵌入客户业务：把模糊需求拆成可验收范围，推进到可上线交付。建立「先本地预览、确认后再上线」的发布纪律；用 Cursor 将设计语言、验收口径与重复交付步骤沉淀为可复用 Agent Skills，形成 AI Native 交付工作流，提升同类需求的交付速度与稳定性。',
	},
	{
		category: '工作经历',
		year: '2026.6 — 至今',
		title: '交互设计 · 前端',
		company: '某教育科技公司',
		description:
			'负责多品牌设计系统与产品界面一致性（宣传物料 / IP / 签约相关界面）；设计并落地家长端 H5 / 小程序转化链路的信息架构与关键节点体验；梳理员工端 Soft Ops 经营看板的信息层级与强调样式，并完成相关前端界面交付，推动方案进入真实使用。',
	},
	{
		category: '教育经历',
		year: '2027 应届',
		title: '本科',
		company: '中南大学',
		description: '产品设计专业，2023 级。主修课程：设计心理学、智能交互设计、设计程序与方法、用户研究、产品形态设计、服务设计等。',
	},
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
		'你好，我是王悦（Dewy）。我是一名 Forward Deployed Engineer，习惯同时用设计与工程把业务问题做成可上线的产品——既关心体验是否说得通，也关心它能不能稳定交付。',
	paragraphs: [
		'目前在某科技咨询公司以 FDE 驻场交付，并用交互 + 前端能力服务教育科技业务：覆盖多品牌设计系统、家长端 H5/小程序转化体验、员工端 Soft Ops 经营后台；同时用 Cursor 把设计语言与验收标准沉淀为可复用 Agent Skills。',
		'此前经历横跨 AI 产品与设计实践：在小红书做方言语料与策略优化，在字节跳动参与即梦视频大模型的 Prompt Engineering；也主导过广汽未来概念车的场景研究，并独立完成商业委托书籍《书斋与人间》的全案设计。',
		'工作之外，我潜水、攀岩、练 Popping / Waacking、弹吉他，也爱电影、咖啡、桌游和即兴喜剧。认真玩，同样训练我对节奏、细节和临场的敏感。如果你想交流项目或合作，欢迎联系我。',
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
		sub: '水肺潜水 / 自由潜',
		group: '动起来',
		blurb: '在水下把节奏放慢，练习呼吸与专注。',
		span: 'wide' as const,
	},
	{
		name: '街舞',
		note: 'Dance',
		sub: 'Popping / Waacking / Afro',
		group: '动起来',
		blurb: '用身体找节拍，把即兴变成可控的表达。',
		span: 'normal' as const,
	},
	{
		name: '攀岩',
		note: 'Climbing',
		group: '动起来',
		blurb: '一条线路一种解题方式，手感比蛮力更重要。',
		span: 'normal' as const,
	},
	{
		name: '旅行',
		note: 'Travel',
		group: '动起来',
		blurb: '换一座城市，重新校准对日常的敏感度。',
		span: 'wide' as const,
	},
	{
		name: '桌游',
		note: 'Board games',
		group: '开一局',
		blurb: '规则里的社交，策略和笑声一样重要。',
		span: 'normal' as const,
	},
	{
		name: '国际象棋',
		note: 'Chess',
		group: '开一局',
		blurb: '六十四格里把下一步算清，判断比输赢更上瘾。',
		span: 'normal' as const,
	},
	{
		name: '台球',
		note: 'Billiards',
		group: '开一局',
		blurb: '一条直线、一个角度，把耐心落到毫米。',
		span: 'normal' as const,
	},
	{
		name: '看即兴喜剧',
		note: 'Improv',
		group: '好好笑',
		blurb: '坐在台下看别人接招，意外比剧本更好笑。',
		span: 'wide' as const,
	},
	{
		name: '听播客',
		note: 'Podcasts',
		group: '好好笑',
		blurb: '听人聊社会议题，主播却嘻嘻哈哈，严肃里带笑。',
		span: 'normal' as const,
	},
	{
		name: '观影',
		note: 'Cinema',
		group: '常思考',
		blurb: '看别人怎么讲故事，也看光影怎么说话。',
		span: 'wide' as const,
		href: '/interests/cinema',
	},
	{
		name: '阅读',
		note: 'Reading',
		group: '常思考',
		blurb: '文字是最轻便的远行，也是最安静的对话。',
		span: 'normal' as const,
	},
	{
		name: '木吉他',
		note: 'Acoustic',
		group: '去感受',
		blurb: '指尖上的音色练习，慢也没关系。',
		span: 'wide' as const,
	},
	{
		name: '咖啡',
		note: 'Coffee',
		group: '去感受',
		blurb: '从豆子到杯子，喜欢可重复的小仪式。',
		span: 'normal' as const,
	},
] as const;

export const interestGroups = [
	{ id: '动起来', label: '动起来', en: 'Move' },
	{ id: '开一局', label: '开一局', en: 'Play' },
	{ id: '好好笑', label: '好好笑', en: 'Laugh' },
	{ id: '常思考', label: '常思考', en: 'Think' },
	{ id: '去感受', label: '去感受', en: 'Feel' },
] as const;

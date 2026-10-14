export const site = {
	name: '王悦',
	englishName: 'Dewy',
	sloganLines: ['Just do it', 'Just Dewy'] as const,
	title: 'AI 产品 · 驻场 FDE',
	tagline:
		'设计出身，近半年在教育 toB 现场做技术产品规划与落地——把模糊需求收成可验收范围，推进 AI / Agent 进入真实业务并上线使用。',
	description:
		'王悦的个人网站 — AI 产品 / 驻场 FDE。客户调研、需求澄清与优先级排序，把方案做到可验收、可上线；熟悉大模型与 Agent 在业务里的边界，习惯人机协同。',
	url: 'https://www.dewyue.com',
	locale: 'zh-CN',
	avatar: '/avatar.webp?v=14',
	email: 'iKevinAyuso@163.com',
	phone: '13787007885',
	location: '上海，中国',
	social: {
		github: 'https://github.com/Dewyue',
		folio: 'https://dewyue.github.io/folio/',
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
	{ name: 'Cursor / Copilot', level: 92 },
	{ name: 'Figma 设计系统', level: 90 },
	{ name: 'Spec / TDD / SOP', level: 88 },
	{ name: '经营参谋 Agent', level: 88 },
	{ name: 'H5 / 小程序', level: 85 },
	{ name: 'FastAPI / 联调', level: 82 },
	{ name: 'Prompt Engineering', level: 90 },
	{ name: '审美 Eval', level: 85 },
] as const;

export const skillCategories = [
	{
		title: 'FDE 交付',
		items: ['驻场需求拆解', 'PoC / MVP 验证', 'Spec → 测试 → 上线', 'FastAPI 联调与运维', 'Human-in-the-loop 兜底'],
	},
	{
		title: '设计系统与品牌',
		items: ['多品牌界面一致性', 'Soft Bento 工作台', 'Figma 组件 + Cursor Skills', '家长端转化链路', '审美评测与迭代'],
	},
	{
		title: 'AI Native 工作流',
		items: ['经营参谋 Agent', 'Cursor / Copilot 开发', 'Spec / TDD / SOP / Eval', 'CI/CD 全栈闭环', 'Prompt Engineering'],
	},
] as const;

export const timeline = [
	{
		category: '工作经历',
		year: '2026.5 — 至今',
		title: 'Forward Deployed Engineer',
		company: '某科技公司',
		description:
			'驻场嵌入客户业务：先对齐要解决的工作问题与不做清单，再写成可验收方案。用 GitHub Copilot / Cursor 做 PoC 与 MVP；以 Spec、TDD、SOP、Eval、CI/CD 串成「需求 → 生成 → 测试 → 交付」闭环，联调 FastAPI、核对字段、配置环境与数据对接。建立「先本地预览、确认后再上线」的发布纪律，并用 Retry / 降级 / Fallback 与人工介入兜住异常，交付客户真实长期使用的完整产品。',
	},
	{
		category: '工作经历',
		year: '2026.6 — 2026.8',
		title: '企业 AI 智能化 · B 端产品',
		company: '某教育科技公司（驻场）',
		description:
			'在教育 toB 现场做技术产品规划与落地：员工端经营参谋 Agent（自然语言问经营问题 → 按权限查真实业务数据 → 局势判断 → 人确认后拟派督办）；人事从录档案收成资产 / 签约 / 假勤自助 / 审批中台，财务把对数、算薪、提成、报表收成可封表、可审计流水线。设计并落地家长端 H5 / 小程序转化链路；负责多品牌设计系统与 Soft Bento 工作台一致性，把设计语言与验收口径沉淀进 Figma 组件与 Cursor Skills。',
	},
	{
		category: '教育经历',
		year: '2027 应届',
		title: '本科 · 产品设计',
		company: '中南大学',
		description:
			'985 · 建筑与艺术学院 · 2023.9 — 2027.6。主修设计心理学、智能交互设计、设计程序与方法、用户研究、产品形态设计、服务设计等。课外自学 MySQL、Python、JavaScript、Arduino IDE。',
	},
	{
		category: '实习经历',
		year: '2025.9 — 2025.12',
		title: 'PE 工程师',
		company: '字节跳动',
		description:
			'深度参与即梦 AI 视频大模型（Seedance 2.0）的训练与迭代。从产品审美与用户体验出发，系统性构建 Prompt Engineering 策略，将自然语言提示词映射到受控标签，对运镜、光影、材质、音频、叙事逻辑等多模态维度精细化调校，把抽象设计审美转化为模型可理解的指令。',
	},
	{
		category: '实习经历',
		year: '2025.8',
		title: '大模型语料训练实习生',
		company: '小红书',
		description:
			'参与方言 AI 项目，负责沪语方言区 LLM 语料标注与策略优化；主责标注体系与 badcase，收 intern 争议样本分类后交给算法。结合实际使用场景提炼方言表达习惯与深层偏好，推动语音评测质量增强、交互更贴近真实沟通。',
	},
	{
		category: '项目经历',
		year: '2025.9 — 2025.10',
		title: '交通工具概念设计',
		company: '广汽集团「从未来到未来」',
		description:
			'在广汽未来概念车项目中主导场景与用户研究，深入洞察粤港澳大湾区未来城市出行中的情感触点，将社会趋势转化为设计语言与功能定义，并完成概念方案全流程表达。成果获 GAC 与 OPSH 导师认可，晋级全国七强。',
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
		category: '校园经历',
		year: '2023.9 — 2024.6',
		title: '联络中心负责人',
		company: '中南大学校团委社团部',
		description:
			'负责校际联络与活动落地：统筹百团大战等校内活动；对接长沙高校、撰写交流材料，策划跨校联谊并执行（流程、预算、场地），推动协作可对标、可落地。',
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
			'个人参与校园 AI Coding 黑客松，借助 AI 驱动的自然语言编程工具，在极限时间内完成交互原型的快速开发。',
	},
] as const;

export const aboutStory = {
	intro:
		'你好，我是王悦（Dewy）——设计出身的 AI 产品 / 驻场 FDE。关注 AI 如何进入真实工作，习惯从高价值业务结果出发，把模糊需求收成可验收的产品范围并推进上线。',
	paragraphs: [
		'近半年在教育 toB 现场做技术产品规划与落地：独立完成客户调研、需求澄清与优先级排序；熟悉大模型 / Agent 在业务里的边界，习惯人机协同；常跨多部门协调，用现场反馈持续迭代通用能力。',
		'此前在字节跳动参与即梦 Seedance 2.0 的 Prompt Engineering，在小红书做沪语方言 LLM 语料与策略；也主导过广汽未来概念车场景研究，并独立完成商业委托书籍《书斋与人间》的全案设计。',
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

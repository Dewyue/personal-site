/** 作品集页面来自《王悦-作品集2026.pdf》，已转为站内图片内嵌展示 */

export const portfolioMeta = {
	title: 'Dewy’s Portfolio 2026',
	subtitle: '王悦 · 作品集',
	totalPages: 31,
	pdfPath: '/portfolio/wangyue-portfolio-2026.pdf',
	pagePath: (n: number) => `/portfolio/page-${String(n).padStart(2, '0')}.jpg`,
} as const;

export const portfolioProjects = [
	{
		id: 'tidal',
		number: '01',
		title: '从未来到未来',
		category: '交通工具概念设计',
		summary: '广汽未来概念出行 — HYPTEC TIDAL 台岛，面向粤港澳大湾区水上都市的潮汐动力概念载具。',
		cover: '/portfolio/page-05.jpg',
		startPage: 5,
		endPage: 10,
	},
	{
		id: 'thermos',
		number: '02',
		title: '保温杯结构设计',
		category: '工业产品结构设计',
		summary: '从爆炸结构到工程图纸，完整表达保温容器的结构逻辑、组件关系与材质细节。',
		cover: '/portfolio/page-11.jpg',
		startPage: 11,
		endPage: 16,
	},
	{
		id: 'charger',
		number: '03',
		title: '充电桩形态设计',
		category: '工业产品形态设计',
		summary: '围绕充电场景的形态语言与材质表达，探索能源设备在日常空间中的产品气质。',
		cover: '/portfolio/page-17.jpg',
		startPage: 17,
		endPage: 19,
	},
	{
		id: 'smarthome',
		number: '04',
		title: 'Future Smart Home',
		category: '智慧家居',
		summary: '国际设计工作坊成果：畅想四十年后的智慧居住，从概念到空间剖面与手作模型。',
		cover: '/portfolio/page-20.jpg',
		startPage: 20,
		endPage: 30,
	},
] as const;

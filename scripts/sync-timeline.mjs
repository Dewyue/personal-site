import { createClient } from '@libsql/client';
import { nanoid } from 'nanoid';

const timelineWork = [
	{
		id: nanoid(10),
		category: '工作经历',
		year: '2026.6 — 至今',
		title: 'Forward Deployed Engineer',
		company: '某科技咨询公司',
		description:
			'以驻场 FDE 方式嵌入客户业务：把模糊需求拆成可验收范围，推进到可上线交付。建立「先本地预览、确认后再上线」的发布纪律；用 Cursor 将设计语言、验收口径与重复交付步骤沉淀为可复用 Agent Skills，形成 AI Native 交付工作流，提升同类需求的交付速度与稳定性。',
		sort: 1,
	},
	{
		id: nanoid(10),
		category: '工作经历',
		year: '2026.6 — 至今',
		title: '交互设计 · 前端',
		company: '某教育科技公司',
		description:
			'负责多品牌设计系统与产品界面一致性（宣传物料 / IP / 签约相关界面）；设计并落地家长端 H5 / 小程序转化链路的信息架构与关键节点体验；梳理员工端 Soft Ops 经营看板的信息层级与强调样式，并完成相关前端界面交付，推动方案进入真实使用。',
		sort: 2,
	},
];

const timelineEducation = [
	{
		id: nanoid(10),
		category: '教育经历',
		year: '2027 应届',
		title: '本科',
		company: '中南大学',
		description: '产品设计专业，2023 级。主修课程：设计心理学、智能交互设计、设计程序与方法、用户研究、产品形态设计、服务设计等。',
		sort: 3,
	},
];

const aboutIntro =
	'你好，我是王悦（Dewy）。我是一名 Forward Deployed Engineer，习惯同时用设计与工程把业务问题做成可上线的产品——既关心体验是否说得通，也关心它能不能稳定交付。';
const aboutParagraphs = [
	'目前在某科技咨询公司以 FDE 驻场交付，并用交互 + 前端能力服务教育科技业务：覆盖多品牌设计系统、家长端 H5/小程序转化体验、员工端 Soft Ops 经营后台；同时用 Cursor 把设计语言与验收标准沉淀为可复用 Agent Skills。',
	'此前经历横跨 AI 产品与设计实践：在小红书做方言语料与策略优化，在字节跳动参与即梦视频大模型的 Prompt Engineering；也主导过广汽未来概念车的场景研究，并独立完成商业委托书籍《书斋与人间》的全案设计。',
	'工作之外，我潜水、攀岩、练 Popping / Waacking、弹吉他，也爱电影、咖啡、桌游和即兴喜剧。认真玩，同样训练我对节奏、细节和临场的敏感。如果你想交流项目或合作，欢迎联系我。',
];

const url = process.env.TURSO_DATABASE_URL;
const token = process.env.TURSO_AUTH_TOKEN;
if (!url?.startsWith('libsql')) {
	console.error('bad turso url', url?.slice(0, 24));
	process.exit(1);
}

const db = createClient({ url, authToken: token });
const r = await db.execute({ sql: 'SELECT value FROM kv WHERE key = ?', args: ['cms_store_v1'] });
const store = JSON.parse(String(r.rows[0].value));
const rest = (store.timeline || []).filter(
	(t) =>
		t.category !== '工作经历' &&
		t.category !== 'Work' &&
		t.category !== '教育经历' &&
		t.category !== 'Education',
);
store.timeline = [...timelineWork, ...timelineEducation, ...rest.map((t, i) => ({ ...t, sort: i + 4 }))];
store.profile = { ...store.profile, aboutIntro, aboutParagraphs };

await db.execute({
	sql: `INSERT INTO kv (key, value, updated_at) VALUES (?, ?, ?)
        ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`,
	args: ['cms_store_v1', JSON.stringify(store), new Date().toISOString()],
});

console.log(
	store.timeline
		.filter((t) => t.category === '工作经历' || t.category === '教育经历')
		.map((t) => `${t.category} · ${t.company} · ${t.title}`),
);

import type { Messages } from '../types'

export const zh: Messages = {
	meta: {
		title: 'Kodora — 本机 Code Agent 会话管理',
		description: '浏览、搜索、统计本机多个 Code Agent 的会话记录。数据留在你的 Mac。',
	},
	nav: {
		features: '功能',
		agents: 'Agent',
		privacy: '隐私',
		github: 'GitHub',
	},
	hero: {
		chipLocal: '本地数据',
		title: '本机 Code Agent 会话，一站管理。',
		description: '浏览、搜索、统计你的 AI 编程会话记录。支持多个 Agent，数据留在你的 Mac。',
		ctaGithub: '下载 Koroda',
		ctaFeatures: '了解功能',
		zoomImage: '放大查看应用截图',
		closeLightbox: '关闭预览',
	},
	features: {
		kicker: '功能',
		heading: '目前已支持的能力',
		items: [
			{ id: 'browse', title: '多 Agent 浏览', description: '项目、会话、消息详情，一个应用集中查看。' },
			{ id: 'search', title: '全文搜索', description: '搜索会话与消息，快速跳转到对应记录。' },
			{ id: 'insights', title: 'Insights 统计', description: '用量总览、活跃墙与图表化统计。' },
			{ id: 'archive', title: '收藏与归档', description: '标记重要会话，隐藏不需要的记录。' },
			{ id: 'notes', title: '私有备注', description: '为会话添加本地备注，搜索时一并命中。' },
			{ id: 'export', title: '导出与复制', description: '会话内容支持 Markdown 复制和导出。' },
			{ id: 'security', title: '敏感信息扫描', description: '扫描会话中的潜在风险，提供安全概览。' },
			{ id: 'local', title: '本地优先', description: '索引与会话数据留在本机，不上传内容。' },
		],
	},
	agents: {
		kicker: '支持的 Agent',
		heading: '一个应用，覆盖常用 Agent',
	},
	privacy: {
		kicker: '隐私',
		heading: '数据留在本机',
		description: 'Kodora 只读取你 Mac 上的 Agent 历史记录，不上传会话内容。',
		points: ['索引保存在本机', '不上传会话内容', '备注与收藏仅本地'],
	},
	footer: {
		ctaGithub: '查看 GitHub',
	},
	theme: {
		auto: '自动',
		light: '浅色',
		dark: '深色',
		labelAuto: '主题：自动。点击切换到浅色。',
		label: '主题：{mode}。点击切换。',
	},
	language: {
		label: '切换语言',
		zh: '中文',
		en: 'EN',
	},
}

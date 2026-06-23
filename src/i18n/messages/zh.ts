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
		changelog: '更新日志',
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
	changelog: {
		kicker: '更新日志',
		heading: '版本历史',
		download: '下载此版本',
		backHome: '← 返回首页',
		entries: [
			{
				version: '0.0.2',
				date: '2026-06-23',
				title: '性能与数据层改进',
				items: [
					'核心数据路径迁移至 UniFFI',
					'提升索引刷新性能',
					'修复 tool call 统计总数问题',
				],
			},
			{
				version: '0.0.1',
				date: '2025-06-22',
				title: '首个公开版本',
				items: [
					'macOS 客户端首次发布',
					'支持浏览 Codex、Claude Code、Cursor、OpenCode、Factory、Pi 等 Agent 的会话记录',
					'全文搜索会话与消息，快速定位记录',
					'Insights 用量统计与活跃墙',
					'收藏、归档与本地私有备注',
					'会话内容支持 Markdown 复制与导出',
					'敏感信息扫描与安全概览',
					'本地优先：索引与会话数据留在本机',
				],
			},
		],
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

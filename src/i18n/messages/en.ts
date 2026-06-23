import type { Messages } from '../types'

export const en: Messages = {
	meta: {
		title: 'Kodora — Local Code Agent History for macOS',
		description:
			'Browse, search, and review conversation history from multiple code agents. Everything stays on your Mac.',
	},
	nav: {
		features: 'Features',
		agents: 'Agents',
		privacy: 'Privacy',
		changelog: 'Changelog',
		github: 'GitHub',
	},
	hero: {
		chipLocal: 'Local data',
		title: 'Your code agent history, in one place.',
		description:
			'Browse, search, and review your AI coding sessions. Multiple agents supported — data stays on your Mac.',
		ctaGithub: 'Download Koroda',
		ctaFeatures: 'See Features',
		zoomImage: 'View full screenshot',
		closeLightbox: 'Close preview',
	},
	features: {
		kicker: 'Features',
		heading: 'What Kodora supports today',
		items: [
			{
				id: 'browse',
				title: 'Multi-Agent Browsing',
				description: 'Projects, sessions, and message details in one app.',
			},
			{
				id: 'search',
				title: 'Full-Text Search',
				description: 'Search sessions and messages, jump to matching records.',
			},
			{
				id: 'insights',
				title: 'Insights',
				description: 'Usage overview, activity wall, and chart summaries.',
			},
			{
				id: 'archive',
				title: 'Favorites & Archive',
				description: 'Mark important sessions and hide the rest.',
			},
			{
				id: 'notes',
				title: 'Private Notes',
				description: 'Add local notes to sessions — included in search results.',
			},
			{
				id: 'export',
				title: 'Export & Copy',
				description: 'Copy or export session content as Markdown.',
			},
			{
				id: 'security',
				title: 'Sensitive Data Scan',
				description: 'Scan sessions for potential risks with a security overview.',
			},
			{
				id: 'local',
				title: 'Local First',
				description: 'Indexes and session data stay on your machine.',
			},
		],
	},
	agents: {
		kicker: 'Supported Agents',
		heading: 'One app for the agents you already use',
	},
	privacy: {
		kicker: 'Privacy',
		heading: 'Data stays local',
		description:
			'Kodora reads agent history from your Mac. Session content is never uploaded.',
		points: ['Index stored locally', 'No session uploads', 'Notes stay on device'],
	},
	footer: {
		ctaGithub: 'View on GitHub',
	},
	changelog: {
		kicker: 'Changelog',
		heading: 'Release history',
		download: 'Download this version',
		backHome: '← Back to home',
		entries: [
			{
				version: '0.0.2',
				date: '2026-06-23',
				title: 'Performance and bug fixes',
				items: [
					'Improved index refresh speed',
					'Fixed statistics display issues',
				],
			},
			{
				version: '0.0.1',
				date: '2025-06-22',
				title: 'Initial public release',
				items: [
					'First macOS release',
					'Browse sessions from Codex, Claude Code, Cursor, OpenCode, Factory, and Pi',
					'Full-text search across sessions and messages',
					'Insights with usage overview and activity wall',
					'Favorites, archive, and local private notes',
					'Copy and export session content as Markdown',
					'Sensitive data scan with security overview',
					'Local-first: indexes and session data stay on your Mac',
				],
			},
		],
	},
	theme: {
		auto: 'Auto',
		light: 'Light',
		dark: 'Dark',
		labelAuto: 'Theme: auto. Click to switch to light.',
		label: 'Theme: {mode}. Click to switch.',
	},
	language: {
		label: 'Switch language',
		zh: '中文',
		en: 'EN',
	},
}

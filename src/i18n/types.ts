export type Locale = 'zh' | 'en'

export type Messages = {
	meta: {
		title: string
		description: string
	}
	nav: {
		features: string
		agents: string
		privacy: string
		github: string
	}
	hero: {
		chipLocal: string
		title: string
		description: string
		ctaGithub: string
		ctaFeatures: string
		previewTitle: string
		previewSessions: Array<{ title: string; meta: string }>
	}
	features: {
		kicker: string
		heading: string
		items: Array<{ title: string; description: string }>
	}
	agents: {
		kicker: string
		heading: string
	}
	privacy: {
		kicker: string
		heading: string
		description: string
		points: [string, string, string]
	}
	footer: {
		ctaGithub: string
	}
	theme: {
		auto: string
		light: string
		dark: string
		labelAuto: string
		label: string
	}
	language: {
		label: string
		zh: string
		en: string
	}
}

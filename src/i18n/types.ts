import type { FeatureId } from '../lib/features'

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
		changelog: string
		github: string
	}
	hero: {
		chipLocal: string
		title: string
		description: string
		ctaGithub: string
		ctaFeatures: string
		zoomImage: string
		closeLightbox: string
	}
	features: {
		kicker: string
		heading: string
		items: Array<{ id: FeatureId; title: string; description: string }>
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
	changelog: {
		kicker: string
		heading: string
		download: string
		backHome: string
		entries: Array<{
			version: string
			date: string
			title: string
			items: string[]
		}>
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

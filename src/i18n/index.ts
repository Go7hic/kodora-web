import { en } from './messages/en'
import { zh } from './messages/zh'
import type { Locale, Messages } from './types'

export type { Locale, Messages }

export const LOCALES: Locale[] = ['zh', 'en']

export const messages: Record<Locale, Messages> = { zh, en }

export const LOCALE_STORAGE_KEY = 'locale'

export function isLocale(value: string | null | undefined): value is Locale {
	return value === 'zh' || value === 'en'
}

export function resolveLocale(stored?: string | null): Locale {
	if (isLocale(stored)) return stored
	if (typeof navigator !== 'undefined') {
		return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
	}
	return 'zh'
}

export function localeToLang(locale: Locale): string {
	return locale === 'zh' ? 'zh-CN' : 'en'
}

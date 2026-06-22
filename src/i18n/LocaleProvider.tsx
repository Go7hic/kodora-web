import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react'
import {
	LOCALE_STORAGE_KEY,
	localeToLang,
	messages,
	resolveLocale,
	type Locale,
	type Messages,
} from './index'

type LocaleContextValue = {
	locale: Locale
	m: Messages
	setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>('zh')

	useEffect(() => {
		setLocaleState(resolveLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY)))
	}, [])

	const setLocale = (next: Locale) => {
		setLocaleState(next)
		window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
	}

	const value = useMemo(
		() => ({
			locale,
			m: messages[locale],
			setLocale,
		}),
		[locale],
	)

	useEffect(() => {
		document.documentElement.lang = localeToLang(locale)
		document.title = value.m.meta.title

		const description = document.querySelector('meta[name="description"]')
		if (description) {
			description.setAttribute('content', value.m.meta.description)
		}
	}, [locale, value.m.meta.description, value.m.meta.title])

	return (
		<LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
	)
}

export function useLocale() {
	const context = useContext(LocaleContext)
	if (!context) {
		throw new Error('useLocale must be used within LocaleProvider')
	}
	return context
}

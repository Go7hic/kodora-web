import { useLocale } from '../i18n/LocaleProvider'
import type { Locale } from '../i18n/types'

export default function LanguageToggle() {
	const { locale, m, setLocale } = useLocale()

	function toggleLocale() {
		const next: Locale = locale === 'zh' ? 'en' : 'zh'
		setLocale(next)
	}

	return (
		<button
			type="button"
			onClick={toggleLocale}
			aria-label={m.language.label}
			title={m.language.label}
			className="btn btn-secondary"
			style={{ height: 32, paddingInline: 12, fontSize: 12 }}
		>
			{locale === 'zh' ? m.language.en : m.language.zh}
		</button>
	)
}

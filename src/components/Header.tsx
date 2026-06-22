import { Link } from '@tanstack/react-router'
import { useLocale } from '../i18n/LocaleProvider'
import LanguageToggle from './LanguageToggle'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
	const { m } = useLocale()

	const navItems = [
		{ href: '#features', label: m.nav.features },
		{ href: '#agents', label: m.nav.agents },
		{ href: '#privacy', label: m.nav.privacy },
	] as const

	return (
		<header className="site-header">
			<nav className="page flex flex-wrap items-center gap-x-6 gap-y-3 py-4">
				<Link
					to="/"
					className="inline-flex items-center gap-2.5 text-[var(--gray-1000)] no-underline"
				>
					<Logo size={34} />
					<span className="label-14" style={{ fontWeight: 600 }}>
						Kodora
					</span>
				</Link>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 sm:order-none sm:w-auto">
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className="nav-link">
							{item.label}
						</a>
					))}
				</div>

				<div className="ml-auto flex items-center gap-2">
					<LanguageToggle />
					<ThemeToggle />
				</div>
			</nav>
		</header>
	)
}

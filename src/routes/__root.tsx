import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { LocaleProvider } from '../i18n/LocaleProvider'
import { LOCALE_STORAGE_KEY, messages } from '../i18n'
import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

const LOCALE_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('${LOCALE_STORAGE_KEY}');var locale=(stored==='zh'||stored==='en')?stored:(navigator.language.toLowerCase().startsWith('zh')?'zh':'en');document.documentElement.lang=locale==='zh'?'zh-CN':'en';}catch(e){}})();`

const FLAREBOARD_WEBSITE_ID = '12fe043e-69c8-4423-b2c1-d84a9e6b9f8a'

export const Route = createRootRoute({
	head: () => {
		const m = messages.zh
		return {
			meta: [
				{ charSet: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ title: m.meta.title },
				{ name: 'description', content: m.meta.description },
				{ name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
				{ name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' },
			],
			links: [
				{ rel: 'stylesheet', href: appCss },
				{ rel: 'icon', href: '/logo.avif', type: 'image/avif' },
			],
		}
	},
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="zh-CN" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
				<script dangerouslySetInnerHTML={{ __html: LOCALE_INIT_SCRIPT }} />
				<HeadContent />
				<script
					defer
					src="https://t.flareboard.dev/script.js"
					data-website-id={FLAREBOARD_WEBSITE_ID}
				/>
			</head>
			<body>
				<LocaleProvider>
					<Header />
					{children}
					<Footer />
				</LocaleProvider>
				<Scripts />
			</body>
		</html>
	)
}

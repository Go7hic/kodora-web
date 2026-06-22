import { useLocale } from '../i18n/LocaleProvider'

export default function Footer() {
	const { m } = useLocale()
	const year = new Date().getFullYear()

	return (
		<footer className="site-footer section-tight">
			<div className="page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<p className="copy-14 m-0 text-secondary">&copy; {year} Kodora</p>
				<a
					href="https://github.com/Go7hic/kodora-web"
					target="_blank"
					rel="noreferrer"
					className="btn btn-primary"
					style={{ height: 32, paddingInline: 12, fontSize: 12 }}
				>
					{m.footer.ctaGithub}
				</a>
			</div>
		</footer>
	)
}

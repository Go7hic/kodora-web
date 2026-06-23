import { createFileRoute, Link } from '@tanstack/react-router'
import DownloadIcon from '../components/DownloadIcon'
import { useLocale } from '../i18n/LocaleProvider'
import { DOWNLOAD_URL, LATEST_VERSION } from '../lib/content'

export const Route = createFileRoute('/changelog')({
	component: ChangelogPage,
	head: () => ({
		meta: [
			{ title: 'Changelog — Kodora' },
			{
				name: 'description',
				content: 'Kodora release notes and version history.',
			},
		],
	}),
})

function ChangelogPage() {
	const { m, locale } = useLocale()
	const dateFormatter = new Intl.DateTimeFormat(
		locale === 'zh' ? 'zh-CN' : 'en-US',
		{ year: 'numeric', month: 'long', day: 'numeric' },
	)

	return (
		<main>
			<section className="section">
				<div className="page changelog-page">
					<p className="label-12 text-muted m-0 mb-3 uppercase tracking-[0.12em]">
						{m.changelog.kicker}
					</p>
					<h1 className="heading-32 m-0 mb-10">{m.changelog.heading}</h1>

					<div className="changelog-list">
						{m.changelog.entries.map((entry) => (
							<article key={entry.version} className="changelog-entry">
								<header className="changelog-entry-head">
									<div className="changelog-entry-meta">
										<h2 className="heading-20 m-0 mono">v{entry.version}</h2>
										<time
											className="copy-14 text-secondary"
											dateTime={entry.date}
										>
											{dateFormatter.format(new Date(entry.date))}
										</time>
									</div>
									{entry.version === LATEST_VERSION ? (
										<a href={DOWNLOAD_URL} className="btn btn-secondary">
											<DownloadIcon />
											{m.changelog.download}
										</a>
									) : null}
								</header>

								{entry.title ? (
									<p className="copy-16 m-0 mb-4 font-medium">{entry.title}</p>
								) : null}

								<ul className="changelog-items">
									{entry.items.map((item) => (
										<li key={item} className="changelog-item copy-14 text-secondary">
											{item}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>

					<p className="copy-14 m-0 mt-10 text-secondary">
						<Link to="/" className="changelog-back">
							{m.changelog.backHome}
						</Link>
					</p>
				</div>
			</section>
		</main>
	)
}

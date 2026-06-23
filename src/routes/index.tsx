import { createFileRoute } from '@tanstack/react-router'
import DownloadIcon from '../components/DownloadIcon'
import FeatureIcon from '../components/FeatureIcon'
import HeroImage from '../components/HeroImage'
import { useLocale } from '../i18n/LocaleProvider'
import { AGENTS, DOWNLOAD_URL } from '../lib/content'

export const Route = createFileRoute('/')({
	component: HomePage,
})

function HomePage() {
	const { m } = useLocale()

	return (
		<main>
			<section className="section">
				<div className="page hero-grid">
					<div>
						<div className="mb-6 flex flex-wrap gap-2">
							<span className="chip">
								<span className="chip-dot" />
								macOS
							</span>
							<span className="chip">{m.hero.chipLocal}</span>
						</div>
						<h1 className="heading-72 m-0 mb-6 max-w-[14ch]">{m.hero.title}</h1>
						<p className="copy-16 m-0 mb-8 max-w-[44ch] text-secondary">
							{m.hero.description}
						</p>
						<div id="download" className="flex flex-wrap gap-3">
							<a
								href={DOWNLOAD_URL}
								className="btn btn-primary"
							>
								<DownloadIcon />
								{m.hero.ctaGithub}
							</a>
							<a href="#features" className="btn btn-secondary">
								{m.hero.ctaFeatures}
							</a>
						</div>
					</div>

					<HeroImage />
				</div>
			</section>

			<section id="features" className="section border-t border-[var(--gray-400)]">
				<div className="page">
					<p className="label-12 text-muted m-0 mb-3 uppercase tracking-[0.12em]">
						{m.features.kicker}
					</p>
					<h2 className="heading-32 m-0 mb-10">{m.features.heading}</h2>
					<div className="feature-grid">
						{m.features.items.map((feature) => (
							<article key={feature.id} className="card feature-card p-6">
								<div className="feature-card-head">
									<FeatureIcon id={feature.id} />
									<h3 className="heading-20 m-0">{feature.title}</h3>
								</div>
								<p className="copy-14 m-0 text-secondary">{feature.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="agents" className="section border-t border-[var(--gray-400)]">
				<div className="page">
					<p className="label-12 text-muted m-0 mb-3 uppercase tracking-[0.12em]">
						{m.agents.kicker}
					</p>
					<h2 className="heading-32 m-0 mb-8">{m.agents.heading}</h2>
					<div className="agent-logos">
						{AGENTS.map((agent) => (
							<span key={agent.id} className="agent-logo-chip">
								<img
									src={agent.logo}
									alt={agent.name}
									className="agent-logo"
								/>
							</span>
						))}
					</div>
				</div>
			</section>

			<section id="privacy" className="privacy-band section border-t border-[var(--gray-400)]">
				<div className="page privacy-layout">
					<div className="privacy-intro">
						<p className="label-12 text-muted m-0 mb-3 uppercase tracking-[0.12em]">
							{m.privacy.kicker}
						</p>
						<h2 className="heading-32 m-0 mb-4">{m.privacy.heading}</h2>
						<p className="copy-16 m-0 text-secondary">{m.privacy.description}</p>
					</div>
					<ul className="privacy-points">
						{m.privacy.points.map((point) => (
							<li key={point} className="privacy-point">
								<span className="privacy-point-dot" aria-hidden="true" />
								<span className="copy-14">{point}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	)
}

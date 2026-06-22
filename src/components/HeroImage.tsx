import { useRef } from 'react'
import { useLocale } from '../i18n/LocaleProvider'

export default function HeroImage() {
	const { m } = useLocale()
	const dialogRef = useRef<HTMLDialogElement>(null)

	function openLightbox() {
		dialogRef.current?.showModal()
	}

	function closeLightbox() {
		dialogRef.current?.close()
	}

	return (
		<>
			<button
				type="button"
				className="hero-visual hero-visual-button"
				onClick={openLightbox}
				aria-label={m.hero.zoomImage}
			>
				<img
					src="/hero.avif"
					alt=""
					className="hero-image"
					width={640}
					height={480}
					loading="eager"
					decoding="async"
				/>
			</button>

			<dialog
				ref={dialogRef}
				className="hero-lightbox"
				onClick={(event) => {
					if (event.target === dialogRef.current) closeLightbox()
				}}
			>
				<div
					className="hero-lightbox-panel"
					onClick={(event) => event.stopPropagation()}
				>
					<button
						type="button"
						className="hero-lightbox-close btn btn-secondary"
						onClick={closeLightbox}
						aria-label={m.hero.closeLightbox}
					>
						×
					</button>
					<img src="/hero.avif" alt="" className="hero-lightbox-image" />
				</div>
			</dialog>
		</>
	)
}

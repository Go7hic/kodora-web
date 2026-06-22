import type { FeatureId } from '../lib/features'
import { FEATURE_ICON_STYLES } from '../lib/features'

type FeatureIconProps = {
	id: FeatureId
}

function IconPath({ id }: { id: FeatureId }) {
	switch (id) {
		case 'browse':
			return (
				<>
					<rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
					<rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
					<rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
					<rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
				</>
			)
		case 'search':
			return (
				<>
					<circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
					<path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
				</>
			)
		case 'insights':
			return (
				<>
					<path d="M4 18V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<path d="M10 18V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<path d="M16 18V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<path d="M22 18V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
				</>
			)
		case 'archive':
			return (
				<>
					<path
						d="M5 8h18v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<path d="M3 8h22v3H3V8z" fill="currentColor" />
					<path d="M10 13h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</>
			)
		case 'notes':
			return (
				<>
					<path
						d="M7 4h10a2 2 0 012 2v14l-4-3-4 3-4-3V6a2 2 0 012-2z"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
				</>
			)
		case 'export':
			return (
				<>
					<path d="M12 4v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<path
						d="M8 10l4 4 4-4"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path d="M5 18h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
				</>
			)
		case 'security':
			return (
				<path
					d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			)
		case 'local':
			return (
				<>
					<path
						d="M12 3l8 4v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V7l8-4z"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
					<circle cx="12" cy="12" r="2" fill="currentColor" />
				</>
			)
	}
}

export default function FeatureIcon({ id }: FeatureIconProps) {
	const style = FEATURE_ICON_STYLES[id]

	return (
		<span
			className="feature-icon"
			style={{ backgroundColor: style.bg, color: style.fg }}
			aria-hidden="true"
		>
			<svg viewBox="0 0 24 24" width="18" height="18" fill="none">
				<IconPath id={id} />
			</svg>
		</span>
	)
}

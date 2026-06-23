type DownloadIconProps = {
	size?: number
}

export default function DownloadIcon({ size = 16 }: DownloadIconProps) {
	return (
		<svg
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill="none"
			aria-hidden="true"
			className="btn-icon"
		>
			<path
				d="M8 2.5v7"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M5.5 8 8 10.5 10.5 8"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 13h9"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	)
}

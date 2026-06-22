type LogoProps = {
	size?: number
	className?: string
}

export default function Logo({ size = 34, className = '' }: LogoProps) {
	return (
		<img
			src="/logo.avif"
			alt=""
			width={size}
			height={size}
			className={className}
			style={{ display: 'block' }}
		/>
	)
}

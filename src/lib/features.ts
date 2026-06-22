export type FeatureId =
	| 'browse'
	| 'search'
	| 'insights'
	| 'archive'
	| 'notes'
	| 'export'
	| 'security'
	| 'local'

export const FEATURE_ICON_STYLES: Record<
	FeatureId,
	{ bg: string; fg: string }
> = {
	browse: { bg: '#dbeafe', fg: '#2563eb' },
	search: { bg: '#ede9fe', fg: '#7c3aed' },
	insights: { bg: '#ccfbf1', fg: '#0d9488' },
	archive: { bg: '#fef3c7', fg: '#d97706' },
	notes: { bg: '#fce7f3', fg: '#db2777' },
	export: { bg: '#dcfce7', fg: '#16a34a' },
	security: { bg: '#fee2e2', fg: '#dc2626' },
	local: { bg: '#e5e7eb', fg: '#374151' },
}

export type Agent = {
	id: string
	name: string
	logo: string
}

export const AGENTS: Agent[] = [
	{ id: 'codex', name: 'Codex', logo: '/codex.svg' },
	{ id: 'claude-code', name: 'Claude Code', logo: '/claude-code.svg' },
	{ id: 'cursor', name: 'Cursor', logo: '/cursor.svg' },
	{ id: 'opencode', name: 'OpenCode', logo: '/opencode.svg' },
	{ id: 'factory', name: 'Factory', logo: '/factory.svg' },
	{ id: 'pi', name: 'Pi Agent', logo: '/pi.svg' },
]

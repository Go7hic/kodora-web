import { createServerFn } from '@tanstack/react-start'

export type HealthResponse = {
	status: 'ok'
	service: 'kodora-web'
	version: string
	timestamp: string
}

export const getHealth = createServerFn({ method: 'GET' }).handler(
	(): HealthResponse => ({
		status: 'ok',
		service: 'kodora-web',
		version: '0.1.0',
		timestamp: new Date().toISOString(),
	}),
)

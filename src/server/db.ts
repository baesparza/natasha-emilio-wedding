import { neon } from '@neondatabase/serverless';
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from '@/server/schema';

export function getDatabaseUrl(): string | undefined {
	const url = import.meta.env.DATABASE_URL;
	return url ? url : undefined;
}

export function getDb(): NeonHttpDatabase<typeof schema> | undefined {
	const url = getDatabaseUrl();
	if (!url) return undefined;
	return drizzle(neon(url), { schema });
}

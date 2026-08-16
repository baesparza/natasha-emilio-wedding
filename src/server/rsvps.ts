import { desc, eq, type InferSelectModel } from 'drizzle-orm';
import { getDb } from '@/server/db';
import { rsvps } from '@/server/schema';

export type RsvpRow = InferSelectModel<typeof rsvps>;

export async function listRsvpsForWedding(weddingSlug: string): Promise<RsvpRow[] | undefined> {
	const db = getDb();
	if (!db) return undefined;
	return db
		.select()
		.from(rsvps)
		.where(eq(rsvps.weddingSlug, weddingSlug))
		.orderBy(desc(rsvps.createdAt));
}

function csvCell(value: string): string {
	if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
	return value;
}

export function rsvpsToCsv(rows: RsvpRow[]): string {
	const header = 'Nombre,Telefono,Fecha';
	const lines = rows.map((row) =>
		[csvCell(row.name), csvCell(row.phone), csvCell(row.createdAt.toISOString())].join(','),
	);
	return `\uFEFF${[header, ...lines].join('\n')}\n`;
}

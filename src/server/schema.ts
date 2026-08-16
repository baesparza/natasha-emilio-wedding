import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const rsvps = pgTable('rsvps', {
	id: uuid('id').defaultRandom().primaryKey(),
	weddingSlug: text('wedding_slug').notNull(),
	name: text('name').notNull(),
	phone: text('phone').notNull(),
	guests: integer('guests').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

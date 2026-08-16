import type { APIRoute } from 'astro';
import { getWeddingBySlug } from '@/content/repository';
import { getDb } from '@/server/db';
import { rsvps } from '@/server/schema';

export const prerender = false;

interface RsvpBody {
	weddingSlug?: unknown;
	name?: unknown;
	phone?: unknown;
}

function json(status: number, body: Record<string, unknown>) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const POST: APIRoute = async ({ request }) => {
	const db = getDb();
	if (!db)
		return json(503, {
			error: 'Las confirmaciones no están disponibles todavía.',
		});

	let body: RsvpBody;
	try {
		body = (await request.json()) as RsvpBody;
	} catch {
		return json(400, { error: 'No se pudo leer la confirmación.' });
	}

	const weddingSlug = typeof body.weddingSlug === 'string' ? body.weddingSlug.trim() : '';
	const name = typeof body.name === 'string' ? body.name.trim() : '';
	const phone = typeof body.phone === 'string' ? body.phone.replace(/\D/g, '') : '';

	const error =
		weddingSlug.length < 1
			? 'Falta la boda para esta confirmación.'
			: name.length < 3
				? 'Completa tu nombre para confirmar.'
				: phone.length < 7
					? 'Ingresa un teléfono válido para confirmar.'
					: '';

	if (error) return json(400, { error });
	if (!getWeddingBySlug(weddingSlug))
		return json(404, { error: 'No encontramos esta boda para guardar la confirmación.' });

	await db.insert(rsvps).values({ weddingSlug, name, phone, guests: 1 });

	return json(201, { ok: true });
};

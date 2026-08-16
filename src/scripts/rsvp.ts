export interface RsvpSubmission {
	weddingSlug: string;
	name: string;
	phone: string;
}

/** Persistence boundary: posts to the server RSVP route (DATABASE_URL stays off the client). */
export async function saveRsvpSubmission(submission: RsvpSubmission): Promise<void> {
	const response = await fetch('/api/rsvp', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(submission),
	});

	if (response.ok) return;

	const data: unknown = await response.json().catch(() => null);
	const message =
		data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
			? data.error
			: 'No se pudo guardar la confirmación.';
	throw new Error(message);
}

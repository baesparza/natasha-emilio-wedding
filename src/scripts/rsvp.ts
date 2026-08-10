export interface RsvpSubmission {
	name: string;
	phone: string;
	guests: number;
}

/**
 * Persistence boundary for RSVP. This intentionally performs no write until
 * the phase-six RSVP repository is connected.
 */
export async function saveRsvpSubmission(submission: RsvpSubmission): Promise<void> {
	void submission;
	await Promise.resolve();
}

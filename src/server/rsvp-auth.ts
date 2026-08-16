import { timingSafeEqual } from 'node:crypto';
import type { AstroCookies } from 'astro';

export const RSVP_VIEW_COOKIE = 'rsvp_view';
const COOKIE_PATH = '/confirmaciones';
const WEEK_SECONDS = 60 * 60 * 24 * 7;

export function getRsvpViewSecret(): string | undefined {
	const secret = import.meta.env.RSVP_VIEW_SECRET?.trim();
	return secret ? secret : undefined;
}

export function secretsEqual(left: string, right: string): boolean {
	const a = Buffer.from(left);
	const b = Buffer.from(right);
	if (a.length !== b.length) return false;
	return timingSafeEqual(a, b);
}

export function isRsvpViewer(cookies: AstroCookies): boolean {
	const secret = getRsvpViewSecret();
	const value = cookies.get(RSVP_VIEW_COOKIE)?.value;
	return Boolean(secret && value && secretsEqual(value, secret));
}

export function grantRsvpView(cookies: AstroCookies, secret: string, secure: boolean) {
	cookies.set(RSVP_VIEW_COOKIE, secret, {
		httpOnly: true,
		sameSite: 'lax',
		secure,
		path: COOKIE_PATH,
		maxAge: WEEK_SECONDS,
	});
}

export function revokeRsvpView(cookies: AstroCookies) {
	cookies.delete(RSVP_VIEW_COOKIE, { path: COOKIE_PATH });
}

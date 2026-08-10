import type { Wedding } from '@/content/types';

// TODO: Improve calendar export —
// - Format DTSTART/DTEND as proper UTC (or VTIMEZONE) instead of stripping the offset
// - Add DESCRIPTION, URL, and GEO when available
// - Escape ICS special characters in SUMMARY/LOCATION
// TODO: Add direct “add to calendar” links (Google Calendar, Outlook, Apple) alongside the .ics download

// Strips timezone offset; UTC/VTIMEZONE handling is tracked in the TODOs above
function formatIcsDate(value: string): string {
	return value.slice(0, 19).replace(/[-:]/g, '');
}

export function createCalendarUrl(
	wedding: Pick<Wedding, 'slug' | 'locale' | 'event' | 'seo'>,
): string {
	const { slug, locale, event, seo } = wedding;
	const lines = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		`PRODID:-//Studio Wedding//Invitation//${locale.toUpperCase()}`,
		'BEGIN:VEVENT',
		`UID:${slug}-${formatIcsDate(event.startsAt)}@studiowedding.com`,
		`DTSTART:${formatIcsDate(event.startsAt)}`,
		`DTEND:${formatIcsDate(event.endsAt)}`,
		`SUMMARY:${seo.title}`,
		`LOCATION:${event.venue}, ${event.address}`,
		'END:VEVENT',
		'END:VCALENDAR',
	];

	return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`;
}

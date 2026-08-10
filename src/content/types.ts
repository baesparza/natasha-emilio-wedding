export interface WeddingTheme {
	colors: {
		lavender: string;
		rosewood: string;
		beige: string;
		olive: string;
		bride: string;
		ink: string;
		inkMuted: string;
		inkStrong: string;
		surface: string;
	};
}

/** Presentation-facing wedding content contract. Adapters map CMS/local data into this shape. */
export interface Wedding {
	slug: string;
	locale: string;
	couple: {
		primaryName: string;
		secondaryName: string;
	};
	seo: {
		title: string;
		description: string;
		ogImage: string;
	};
	theme: WeddingTheme;
	hero: {
		image: string;
		imageAlt: string;
		eyebrow: string;
		headline: string;
		/** Optional monogram or logo shown above the hero. */
		logo?: string;
	};
	quote: {
		/** Setup line(s) before the turn */
		lead: string;
		/** Closing affirmation — visual climax */
		close: string;
	};
	event: {
		/** Quiet lead-in before the invitation flourish */
		invitationLead: string;
		/** Script climax of the invitation line */
		invitationClose: string;
		venue: string;
		address: string;
		dateLabel: string;
		startsAt: string;
		endsAt: string;
		ceremonyLabel: string;
		receptionLabel: string;
		mapImage: string;
		mapUrl: string;
		/** Individual ceremony/reception locations when the event spans venues. */
		places?: Array<{
			label: string;
			name: string;
			address: string;
			mapUrl?: string;
		}>;
		/** Optional travel / lodging. Omit when unused. */
		travel?: {
			heading: string;
			note?: string;
			stays?: Array<{ name: string; phone: string }>;
		};
	};
	indications: {
		heading: string;
		children: {
			title: string;
			body: string;
		};
		guests: string;
		dressCode: {
			description: string;
			examplesUrl: string;
			colors: Array<{ name: string; value: string }>;
		};
		reservedColorMessage: string;
	};
	interlude: {
		image: string;
		imageAlt: string;
		caption: string;
	};
	gift: {
		heading: string;
		description: string;
		bank: string;
		accountNumber: string;
		accountType: string;
		holders: [{ name: string; id: string }, { name: string; id: string }];
	};
	rsvp: {
		deadline: string;
	};
	credits: {
		text: string;
		phone: string;
	};
}

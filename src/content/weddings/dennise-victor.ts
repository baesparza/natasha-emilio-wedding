import type { Wedding } from '@/content/types';

export const denniseVictor: Wedding = {
	slug: 'dennise-victor',
	locale: 'es',
	couple: {
		primaryName: 'Dennise',
		secondaryName: 'Victor',
	},
	seo: {
		title: 'Dennise & Victor',
		description:
			'Te invitamos a celebrar la boda de Dennise y Victor el 15 de octubre de 2026 en Cuenca.',
		ogImage: '/weddings/dennise-victor/photo-closeup.png',
	},
	theme: {
		colors: {
			lavender: '#786252',
			rosewood: '#a87861',
			beige: '#c9ac8d',
			olive: '#4c4831',
			bride: '#fbf8f1',
			ink: '#201914',
			inkMuted: '#50443b',
			inkStrong: '#160f0b',
			surface: '#fffdf9',
		},
	},
	hero: {
		image: '/weddings/dennise-victor/photo-gazebo.png',
		imageAlt: 'Dennise y Victor tomados de las manos frente al lago',
		eyebrow: '15 · 10 · 2026',
		headline: 'Sí, quiero, para toda la vida',
	},
	quote: {
		lead: 'Encontrarte fue el destino',
		close: 'elegirte cada día es el amor',
	},
	event: {
		invitationLead: 'Nos complace invitarte',
		invitationClose: 'a nuestra boda',
		venue: 'Quinta Margarita',
		address: 'Calle del Perejil, Cuenca',
		dateLabel: '15 de octubre, 2026',
		startsAt: '2026-10-15T17:00:00-05:00',
		endsAt: '2026-10-16T00:00:00-05:00',
		ceremonyLabel: 'Ceremonia · 5:00 PM',
		receptionLabel: 'Recepción · 8:00 PM',
		mapImage: '/weddings/dennise-victor/mapa.png',
		mapUrl: 'https://maps.app.goo.gl/dM4C9KFKtkvVEXUd7',
		places: [
			{
				label: 'Ceremonia',
				name: 'Iglesia Santa Marianita del Arenal',
				address: 'Calle Camino Viejo a Baños y Tarquino Cordero, Cuenca',
			},
			{
				label: 'Recepción',
				name: 'Quinta Margarita',
				address: 'Calle del Perejil, Cuenca',
				mapUrl: 'https://maps.app.goo.gl/dM4C9KFKtkvVEXUd7',
			},
		],
	},
	indications: {
		heading: 'Aquí te dejamos unas indicaciones para tu asistencia…',
		children: {
			title: 'Niños',
			body: 'Los pequeños también son parte de la fiesta. Habrá espacio y cariño para ellos en la celebración.',
		},
		guests:
			'Queremos celebrar nuestro amor con un aforo limitado. La invitación es exclusiva para ti.',
		dressCode: {
			description: 'Mira la paleta de colores para celebrar juntos.',
			examplesUrl: 'https://www.canva.com/design/DAGM1ibWDwM/bwtkCN3ETfjT66La7QiXXQ/edit',
			colors: [
				{ name: 'Cacao', value: '#786252' },
				{ name: 'Canela', value: '#a87861' },
				{ name: 'Arena', value: '#c9ac8d' },
				{ name: 'Olivo', value: '#4c4831' },
			],
		},
		reservedColorMessage: 'Estamos reservando el blanco y parecidos solo para la novia.',
	},
	interlude: {
		image: '/weddings/dennise-victor/photo-dock.png',
		imageAlt: 'Dennise y Victor sentados juntos frente a un lago',
		caption: 'Una tarde para reunirnos, celebrar y quedarnos con la historia.',
	},
	gift: {
		heading: 'Si deseas obsequiarnos algo, lo recibiremos con mucho cariño',
		description:
			'Tu presencia es el mejor regalo; cualquier detalle adicional será una bendición para nuestro comienzo.',
		bank: 'Cuenta de ahorros · Banco (por confirmar)',
		accountNumber: '0000000000',
		accountType: 'Cuenta compartida',
		holders: [
			{ name: 'Dennise', id: 'CI: por confirmar' },
			{ name: 'Victor', id: 'CI: por confirmar' },
		],
	},
	rsvp: {
		deadline: 'Confirma tu asistencia hasta el 31 de agosto.',
	},
	credits: {
		text: 'Por Bruno Esparza · Derechos reservados, 2026.',
		phone: '0992620353',
	},
};

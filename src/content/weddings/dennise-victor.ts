import type { Wedding } from '@/content/types';
import closeup from '@/assets/weddings/dennise-victor/photo-closeup.png';
import dock from '@/assets/weddings/dennise-victor/photo-dock.png';
import gazebo from '@/assets/weddings/dennise-victor/photo-gazebo.png';
import map from '@/assets/weddings/dennise-victor/mapa.png';

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
			'Te invitamos a celebrar la boda de Dennise y Victor el sábado 17 de octubre de 2026 en Cuenca.',
		ogImage: closeup,
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
		image: gazebo,
		imageAlt: 'Dennise y Victor tomados de las manos frente al lago',
		eyebrow: '17 · 10 · 2026',
		headline: 'Sí quiero, para toda la vida',
	},
	music: {
		src: '/weddings/dennise-victor/Lasso-HastaEseDía.mp3',
		title: 'Hasta Ese Día — Lasso',
	},
	quote: {
		lead: 'Amar es seguir eligiéndonos cada día',
		close: 'el resto de nuestras vidas',
	},
	event: {
		invitationLead: 'Nos complace invitarte',
		invitationClose: 'a nuestra boda',
		venue: 'Quinta Margarita',
		address: 'Calle del Perejil, Cuenca',
		dateLabel: 'Sábado 17 de octubre, 2026',
		startsAt: '2026-10-17T17:00:00-05:00',
		endsAt: '2026-10-18T00:00:00-05:00',
		ceremonyLabel: 'Ceremonia · 5:00 PM',
		receptionLabel: 'Recepción · 8:00 PM',
		mapImage: map,
		mapUrl: 'https://maps.app.goo.gl/dM4C9KFKtkvVEXUd7',
		places: [
			{
				label: 'Ceremonia',
				name: 'Iglesia Santa Marianita del Arenal',
				address: 'Calle Camino Viejo a Baños y Tarquino Cordero, Cuenca',
				mapUrl:
					'https://www.google.com/maps/search/?api=1&query=Iglesia+Santa+Marianita+del+Arenal+Camino+Viejo+a+Ba%C3%B1os+Tarquino+Cordero+Cuenca',
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
			description: 'Formal.',
		},
		reservedColorMessage: 'Te recomendamos evitar estos colores; están reservados para la novia y las damas de honor.',
		reservedColors: [
			{ name: 'Blanco', value: '#fbf8f1' },
			{ name: 'Cacao', value: '#786252' },
		],
	},
	interlude: {
		image: dock,
		imageAlt: 'Dennise y Victor sentados juntos frente a un lago',
		caption: 'Una tarde para reunirnos, celebrar y quedarnos con la historia.',
	},
	gift: {
		heading: 'Tu presencia es el mejor regalo, pero…',
		description:
			'Si quieres hacernos un detalle, estamos agradecidos. Para tu comodidad puedes realizarlo mediante sobre cerrado o cualquiera de las siguientes cuentas.',
		holders: [{ name: 'Víctor Hugo Feijóo Romero', id: 'CI: 0707106381' }],
		email: 'yugo_16_96@hotmail.com',
		accounts: [
			{ bank: 'Banco Pichincha', accountNumber: '2206018966', accountType: 'ahorros' },
			{ bank: 'Coop. JEP', accountNumber: '406158288900', accountType: 'ahorros' },
			{ bank: 'Banco Guayaquil', accountNumber: '0056568463', accountType: 'ahorros' },
			{ bank: 'Produbanco', accountNumber: '12072095585', accountType: 'ahorros' },
		],
	},
	rsvp: {
		deadline: 'Confirma tu asistencia hasta el 17 de septiembre.',
	},
	credits: {
		text: 'Por Bruno Esparza · Derechos reservados, 2026.',
		phone: '0992620353',
	},
};

import type { Wedding } from '@/content/types';
import hero from '@/assets/weddings/natasha-emilio/hero.jpg';
import interlude from '@/assets/weddings/natasha-emilio/interlude.jpg';
import logo from '@/assets/weddings/natasha-emilio/logo.jpg';
import map from '@/assets/weddings/natasha-emilio/mapa.png';
import ogImage from '@/assets/weddings/natasha-emilio/og.jpg';

export const natashaEmilio: Wedding = {
	slug: 'natasha-emilio',
	locale: 'es',
	couple: {
		primaryName: 'Natasha',
		secondaryName: 'Emilio',
	},
	seo: {
		title: 'Natasha & Emilio',
		description:
			'Te invitamos a celebrar la boda de Natasha y Emilio el 19 de octubre en El Sauce, Landangui.',
		ogImage,
	},
	theme: {
		colors: {
			lavender: '#86778c',
			rosewood: '#c6939b',
			beige: '#d4b2a0',
			olive: '#436038',
			bride: '#faf9ee',
			ink: '#101010',
			inkMuted: '#3f3f3f',
			inkStrong: '#000000',
			surface: '#ffffff',
		},
	},
	hero: {
		image: hero,
		imageAlt: 'Pareja caminando entre árboles al atardecer',
		eyebrow: '19 · 10 · 2024',
		headline: 'Todas las bodas tienen una historia, forma parte de ella',
		logo,
	},
	quote: {
		lead: 'Amamos la vida, no por el hábito de vivir',
		close: 'sino por el hábito de amar',
	},
	event: {
		invitationLead: 'Nos complace invitarte',
		invitationClose: 'a nuestra boda',
		venue: 'El Sauce, Landangui',
		address: 'vía a Malacatos',
		dateLabel: '19 de octubre, 2024',
		startsAt: '2024-10-19T16:00:00-05:00',
		endsAt: '2024-10-19T23:00:00-05:00',
		ceremonyLabel: 'Ceremonia · 4:00 PM',
		receptionLabel: 'Recepción · 5:30 PM',
		mapImage: map,
		mapUrl: 'https://maps.app.goo.gl/hTtNPkG9gy8kPds87',
		travel: {
			heading: 'Cómo llegar y hospedaje',
			note: 'Planea tu llegada con tiempo: el lugar está en la vía a Malacatos.',
			stays: [
				{ name: 'Hostería Mi Compadre', phone: '0991113496' },
				{ name: 'Hotel Villa Colonial', phone: '0989985952' },
			],
		},
	},
	indications: {
		heading: 'Aquí te dejamos unas indicaciones para tu asistencia…',
		children: {
			title: 'Child Free',
			body: 'Nos gustan tanto los niños que no queremos que se desvelen ni pasen frío. Solo adultos, por favor.',
		},
		guests:
			'Queremos celebrar nuestro amor con un aforo limitado. La invitación es exclusiva para ti.',
		dressCode: {
			description: 'Mira la paleta de colores para celebrar juntos.',
			examplesUrl: 'https://www.canva.com/design/DAGM1ibWDwM/bwtkCN3ETfjT66La7QiXXQ/edit',
			colors: [
				{ name: 'Lavanda', value: '#86778c' },
				{ name: 'Palo de rosa', value: '#c6939b' },
				{ name: 'Beige', value: '#d4b2a0' },
				{ name: 'Verde olivo', value: '#436038' },
			],
		},
		reservedColorMessage: 'Estamos reservando el blanco y parecidos solo para la novia.',
	},
	interlude: {
		image: interlude,
		imageAlt: 'Ceremonia al aire libre rodeada de montañas',
		caption: 'Una tarde para reunirnos, celebrar y quedarnos con la historia.',
	},
	gift: {
		heading: 'Si quieres hacernos un regalo, estamos agradecidos',
		description:
			'Recuerda que lo importante es que vengas con ilusión, alegría y ganas de pasarlo bien.',
		bank: 'Cuenta de ahorros · Banco de Guayaquil',
		accountNumber: '0049020907',
		accountType: 'Cuenta compartida',
		holders: [
			{ name: 'Natasha Beltrán', id: 'CI: 1104832934' },
			{ name: 'Emilio Sánchez', id: 'CI: 1104633373' },
		],
	},
	rsvp: {
		deadline: 'Confirma tu asistencia hasta el 5 de octubre.',
	},
	credits: {
		text: 'Por Bruno Esparza · Derechos reservados, 2026.',
		phone: '0992620353',
	},
};

import { natashaEmilio } from '@/content/weddings/natasha-emilio';
import type { Wedding } from '@/content/types';

const weddings: Wedding[] = [natashaEmilio];

export function getWeddingBySlug(slug: string): Wedding | undefined {
	return weddings.find((wedding) => wedding.slug === slug);
}

export function listWeddings(): Wedding[] {
	return weddings;
}

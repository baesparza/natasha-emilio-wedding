/**
 * Single source for GSAP + Lenis.
 *
 * Always import motion APIs from here — never from `gsap` / `lenis` directly —
 * so plugins register once and ScrollTrigger stays synced with smooth scroll.
 *
 * @example
 * import { gsap, ScrollTrigger, prefersReducedMotion, getLenis } from '@/scripts/motion'
 *
 * if (prefersReducedMotion()) return
 *
 * gsap.from('[data-reveal]', {
 *   opacity: 0,
 *   y: 32,
 *   duration: 1,
 *   scrollTrigger: { start: 'top 85%' },
 * })
 *
 * getLenis()?.scrollTo('#rsvp', { offset: -24 })
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { $, $$ } from './dom';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

let lenis: Lenis | null = null;
let motionMedia: MediaQueryList | null = null;
let booted = false;

export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return true;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function onTicker(time: number): void {
	lenis?.raf(time * 1000);
}

function onMotionPreferenceChange(event: MediaQueryListEvent): void {
	if (event.matches) destroyMotion();
}

/** Boot site-wide Lenis once from the SmoothScroll island (BaseLayout). */
export function initMotion(): Lenis | null {
	if (typeof window === 'undefined' || booted) return lenis;

	booted = true;

	if (prefersReducedMotion()) {
		ScrollTrigger.refresh();
		return null;
	}

	lenis = new Lenis({
		autoRaf: false,
		lerp: 0.1,
		smoothWheel: true,
	});

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add(onTicker);
	gsap.ticker.lagSmoothing(0);

	motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
	motionMedia.addEventListener('change', onMotionPreferenceChange);

	return lenis;
}

export function destroyMotion(): void {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	gsap.set($$<HTMLElement>('[data-parallax]'), { clearProps: 'transform' });
	gsap.set($$<HTMLElement>('[data-reveal]'), { clearProps: 'opacity,transform' });

	if (!lenis) {
		booted = false;
		return;
	}

	gsap.ticker.remove(onTicker);
	motionMedia?.removeEventListener('change', onMotionPreferenceChange);
	motionMedia = null;

	lenis.destroy();
	lenis = null;
	booted = false;
	ScrollTrigger.refresh();
}

export function getLenis(): Lenis | null {
	return lenis;
}

/** Duration (seconds) for same-page hash link smooth scrolls. */
export const HASH_SCROLL_DURATION = 3;

/** Smooth-scroll via Lenis when active; otherwise native scroll. */
export function scrollTo(
	target: string | number | HTMLElement,
	options?: { offset?: number; immediate?: boolean; duration?: number },
): void {
	if (lenis) {
		lenis.scrollTo(target, options);
		return;
	}

	if (typeof target === 'number') {
		window.scrollTo({ top: target, behavior: options?.immediate ? 'auto' : 'smooth' });
		return;
	}

	const element = typeof target === 'string' ? $(target) : target;

	element?.scrollIntoView({
		behavior: options?.immediate || prefersReducedMotion() ? 'auto' : 'smooth',
		block: 'start',
	});
}

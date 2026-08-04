/**
 * Query the DOM for a single element.
 * @param selector - The selector to query for.
 * @param scope - The scope to query within. Defaults to the document.
 * @returns The first element that matches the selector.
 */
export function $<T extends Element = HTMLElement>(
	selector: string,
	scope: Document | HTMLElement = document,
): T | null {
	return scope.querySelector(selector) as T | null;
}

/**
 * Query the DOM for multiple elements.
 * @param selector - The selector to query for.
 * @param scope - The scope to query within. Defaults to the document.
 * @returns A list of elements that match the selector.
 */
export function $$<T extends Element = HTMLElement>(
	selector: string,
	scope: Document | HTMLElement = document,
): T[] {
	return Array.from(scope.querySelectorAll(selector)) as T[];
}

/** @type {import('prettier').Config} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'all',
	semi: true,
	useTabs: true,
	// TODO: Find an Astro formatter that keeps tag content multiline without conflicting with Prettier.
	// Keep classic wraps: condition / ? / : — do not use "curious" ternaries.
	experimentalTernaries: false,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: ['*.md', '*.mdx'],
			options: {
				useTabs: false,
				proseWrap: 'preserve',
			},
		},
	],
};

/** @type {import('prettier').Config} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'all',
	semi: true,
	useTabs: true,
	// Break ternaries onto their own lines: condition / ? / :
	experimentalTernaries: true,
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

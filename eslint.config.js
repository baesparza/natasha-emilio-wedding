import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

const motionOnlyMessage =
	'Import from "@/scripts/motion" instead so GSAP plugins and Lenis stay synced.';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'dist/**',
			'.astro/**',
			'legacy/**',
			'sanity/**',
			'node_modules/**',
			'.vercel/**',
			'src/env.d.ts',
		],
	},
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['src/**/*.{js,mjs,cjs,ts,tsx,astro}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					paths: [
						{
							name: 'gsap',
							message: motionOnlyMessage,
						},
						{
							name: 'lenis',
							message: motionOnlyMessage,
						},
					],
					patterns: [
						{
							group: ['gsap/*'],
							message: motionOnlyMessage,
						},
						{
							group: ['lenis/*'],
							message: motionOnlyMessage,
						},
					],
				},
			],
		},
	},
	{
		// Single allowed import site for gsap / lenis.
		files: ['src/scripts/motion.ts'],
		rules: {
			'no-restricted-imports': 'off',
		},
	},
	// Turn off formatting rules that fight Prettier.
	eslintConfigPrettier,
	{
		// Re-enable after prettier: Prettier does not own brace style for if/return.
		files: ['src/**/*.{js,mjs,cjs,ts,tsx,astro}'],
		rules: {
			curly: ['error', 'multi'],
		},
	},
];

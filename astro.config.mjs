import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JSCode',
			social: {
				github: 'https://roelcode.com/',
				facebook: 'https://roelcode.com/',
				tiktok: 'https://roelcode.com/',
				youtube: 'https://roelcode.com/',
			},
			logo: {
				src: './src/assets/jscode-logo.svg',
			},
			customCss: [
				// Ruta relativa a tu archivo CSS personalizado
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'guides/intro' },
					],
				},
				{
					label: 'Introducción a JavaScript',
					autogenerate: { directory: '01-intro-js' },
				},
				{
					label: 'Variables y tipos de datos',
					autogenerate: { directory: '02-var-and-data-types' },
				},
			],
		}),
	],
});

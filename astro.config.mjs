// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://wangyue-dewy.vercel.app',
	adapter: vercel(),
	integrations: [sitemap()],
	security: {
		allowedDomains: [
			{ hostname: 'localhost' },
			{ hostname: '127.0.0.1' },
			{ hostname: 'wangyue-dewy.vercel.app', protocol: 'https' },
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
	},
});

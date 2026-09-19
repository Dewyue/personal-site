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
	i18n: {
		locales: ['zh', 'en'],
		defaultLocale: 'zh',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	security: {
		allowedDomains: [
			{ hostname: 'localhost' },
			{ hostname: '127.0.0.1' },
			{ hostname: 'dewyue.com', protocol: 'https' },
			{ hostname: 'www.dewyue.com', protocol: 'https' },
			{ hostname: 'dewyue.wang', protocol: 'https' },
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

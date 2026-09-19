import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './ui';
import { getUi } from './ui';

export type { Locale } from './ui';
export { getUi, ui } from './ui';

export function resolveLocale(currentLocale: string | undefined): Locale {
	return currentLocale === 'en' ? 'en' : 'zh';
}

/** Prefix a site path for the given locale (`/about` → `/en/about`). */
export function localizePath(locale: Locale, path: string): string {
	const clean = path === '/' ? '/' : path.replace(/\/$/, '') || '/';
	if (locale === 'zh') return clean;
	if (clean === '/') return '/en';
	return getRelativeLocaleUrl('en', clean.replace(/^\//, ''));
}

/**
 * Map current pathname to the same page in the other locale.
 * Detail routes without EN counterparts fall back to their index pages.
 */
export function getAlternatePath(pathname: string, target: Locale): string {
	const path = pathname.replace(/\/$/, '') || '/';

	if (path.startsWith('/admin') || path.startsWith('/api')) {
		return path;
	}

	// Normalize to a locale-less path first
	const bare = path.startsWith('/en/') ? path.slice(3) : path === '/en' ? '/' : path;

	// No EN detail pages for project slugs — use list pages
	let mapped = bare;
	if (/^\/projects\/.+/.test(bare)) mapped = '/projects';

	if (target === 'en') {
		if (mapped === '/') return '/en';
		return `/en${mapped}`;
	}

	return mapped || '/';
}

export function navItems(locale: Locale) {
	const t = getUi(locale);
	return [
		{ label: t.nav.home, href: localizePath(locale, '/') },
		{ label: t.nav.about, href: localizePath(locale, '/about') },
		{ label: t.nav.projects, href: localizePath(locale, '/projects') },
		{ label: t.nav.interests, href: localizePath(locale, '/interests') },
		{ label: t.nav.contact, href: localizePath(locale, '/contact') },
	] as const;
}

export function htmlLang(locale: Locale): string {
	return locale === 'en' ? 'en' : 'zh-CN';
}

export function ogLocale(locale: Locale): string {
	return locale === 'en' ? 'en_US' : 'zh_CN';
}

export function dateLocale(locale: Locale): string {
	return locale === 'en' ? 'en-US' : 'zh-CN';
}

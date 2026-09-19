import {
	aboutStory as zhAbout,
	contactInfo as zhContact,
	interestGroups as zhInterestGroups,
	interests as zhInterests,
	skillCategories as zhSkillCategories,
	skills as zhSkills,
	timeline as zhTimeline,
} from '../data/site';
import { cinemaPage as zhCinema, lifeMovies as zhMovies } from '../data/cinema';
import { portfolioProjects as zhProjects } from '../data/portfolio';
import { getPublicContent } from '../lib/cms/getPublicContent';
import {
	enAboutStory,
	enCinemaPage,
	enContactInfo,
	enInterestGroups,
	enInterests,
	enMovies,
	enProjects,
	enSite,
	enSkillCategories,
	enSkills,
	enTimeline,
} from './content/en';
import type { Locale } from './ui';

/** Load public page content for a locale (CMS for zh, static for en). */
export async function loadLocalizedContent(locale: Locale) {
	if (locale === 'en') {
		return {
			site: enSite,
			skills: [...enSkills],
			projects: enProjects,
			timeline: [...enTimeline],
			aboutStory: enAboutStory,
			skillCategories: [...enSkillCategories],
			contactInfo: enContactInfo,
			interests: enInterests.map((item) =>
				'href' in item && item.href
					? { ...item, href: `/en${item.href}` }
					: item,
			),
			interestGroups: [...enInterestGroups],
			cinema: enCinemaPage,
			movies: enMovies.map((m) => ({
				rank: m.rank,
				title: m.displayTitle,
				titleEn: m.displayTitleSecondary,
				year: m.year,
				poster: m.poster,
				imdb: m.imdb,
			})),
			fromCms: false as const,
		};
	}

	const cms = await getPublicContent();
	return {
		site: cms.site,
		skills: cms.skills,
		projects: cms.projects,
		timeline: cms.timeline,
		aboutStory: cms.aboutStory,
		skillCategories: [...zhSkillCategories],
		contactInfo: zhContact,
		interests: [...zhInterests],
		interestGroups: [...zhInterestGroups],
		cinema: {
			...zhCinema,
			intro: cms.cinemaIntro,
			habit: cms.cinemaHabit,
		},
		movies: cms.movies,
		fromCms: cms.fromCms,
	};
}

export type LocalizedContent = Awaited<ReturnType<typeof loadLocalizedContent>>;

/** Fallback static zh bundles (unused when CMS works). */
export const zhStaticFallback = {
	about: zhAbout,
	skills: zhSkills,
	timeline: zhTimeline,
	projects: zhProjects,
	movies: zhMovies,
};

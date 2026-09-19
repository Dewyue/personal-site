import { site as fallbackSite, skills as fallbackSkills, aboutStory as fallbackAbout, timeline as fallbackTimeline } from '../../data/site';
import { portfolioProjects as fallbackProjects } from '../../data/portfolio';
import { cinemaPage as fallbackCinema, lifeMovies as fallbackMovies } from '../../data/cinema';
import { readStore } from './store';
import {
	toAboutFromStore,
	toMoviesFromStore,
	toProjectsFromStore,
	toSiteFromStore,
	toSkillsFromStore,
	toTimelineFromStore,
} from './public';

/** Load live CMS content with static fallbacks. */
export async function getPublicContent() {
	try {
		const store = await readStore();
		const skills = toSkillsFromStore(store);
		const projects = toProjectsFromStore(store);
		const timeline = toTimelineFromStore(store);
		const movies = toMoviesFromStore(store);

		return {
			site: toSiteFromStore(store),
			skills: skills.length ? skills : [...fallbackSkills],
			projects: projects.length ? projects : [...fallbackProjects],
			timeline: timeline.length ? timeline : [...fallbackTimeline],
			aboutStory: toAboutFromStore(store),
			// Empty string is a valid CMS edit — do not fall back with ||
			cinemaIntro: store.cinemaIntro ?? fallbackCinema.intro,
			cinemaHabit: store.cinemaHabit ?? fallbackCinema.habit,
			movies: movies.length ? movies : [...fallbackMovies],
			fromCms: true as const,
		};
	} catch (error) {
		console.error('CMS unavailable, using static fallback', error);
		return {
			site: fallbackSite,
			skills: [...fallbackSkills],
			projects: [...fallbackProjects],
			timeline: [...fallbackTimeline],
			aboutStory: fallbackAbout,
			cinemaIntro: fallbackCinema.intro,
			cinemaHabit: fallbackCinema.habit,
			movies: [...fallbackMovies],
			fromCms: false as const,
		};
	}
}

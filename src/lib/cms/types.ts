export type Profile = {
	name: string;
	title: string;
	tagline: string;
	description: string;
	email: string;
	phone: string;
	location: string;
	avatar: string;
	wechat: string;
	github: string;
	instagram: string;
	xiaohongshu: string;
	douyin: string;
	linkedin: string;
	aboutIntro: string;
	aboutParagraphs: string[];
};

export type Movie = {
	id: string;
	rank: number;
	title: string;
	titleEn: string;
	year: number;
	poster: string;
	imdb: string;
	visible: boolean;
};

export type Skill = {
	id: string;
	name: string;
	level: number;
	sort: number;
};

export type Project = {
	id: string;
	number: string;
	title: string;
	category: string;
	summary: string;
	cover: string;
	startPage: number;
	endPage: number;
	visible: boolean;
	sort: number;
};

export type TimelineItem = {
	id: string;
	category: string;
	year: string;
	title: string;
	company: string;
	description: string;
	sort: number;
};

export type CmsStore = {
	profile: Profile;
	movies: Movie[];
	skills: Skill[];
	projects: Project[];
	timeline: TimelineItem[];
	cinemaIntro: string;
	cinemaHabit: string;
};

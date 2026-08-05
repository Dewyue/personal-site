export const cinemaPage = {
	title: '电影',
	en: 'Cinema',
	description: '观影体验、IMAX，以及几部人生电影。',
	intro: '看电影，是把故事、光影和情绪一次吃干净。',
	habit: '我很注重观影体验——能进影院就进影院，尤其喜欢 IMAX。',
} as const;

export const lifeMovies = [
	{
		rank: 1,
		title: '小马王',
		titleEn: 'Spirit: Stallion of the Cimarron',
		year: 2002,
		poster: '/interests/cinema/spirit.jpg',
		imdb: 'https://www.imdb.com/title/tt0166813/',
	},
	{
		rank: 2,
		title: '加勒比海盗3',
		titleEn: "Pirates of the Caribbean: At World's End",
		year: 2007,
		poster: '/interests/cinema/pirates3.jpg',
		imdb: 'https://www.imdb.com/title/tt0449088/',
	},
	{
		rank: 3,
		title: '盗梦空间',
		titleEn: 'Inception',
		year: 2010,
		poster: '/interests/cinema/inception.jpg',
		imdb: 'https://www.imdb.com/title/tt1375666/',
	},
	{
		rank: 4,
		title: '肖申克的救赎',
		titleEn: 'The Shawshank Redemption',
		year: 1994,
		poster: '/interests/cinema/shawshank.jpg',
		imdb: 'https://www.imdb.com/title/tt0111161/',
	},
	{
		rank: 5,
		title: '好东西',
		titleEn: 'Her Story',
		year: 2024,
		poster: '/interests/cinema/haodongxi.jpg',
		imdb: 'https://www.imdb.com/title/tt31807233/',
	},
	{
		rank: 6,
		title: '僵尸世界大战',
		titleEn: 'World War Z',
		year: 2013,
		poster: '/interests/cinema/worldwarz.jpg',
		imdb: 'https://www.imdb.com/title/tt0816711/',
	},
] as const;

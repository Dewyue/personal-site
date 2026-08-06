import { createClient, type Client } from '@libsql/client';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { createSeedStore } from './seed';
import type { CmsStore, Movie, Profile, Project, Skill, TimelineItem } from './types';

const STORE_KEY = 'cms_store_v1';

let client: Client | null = null;

function getDb(): Client {
	if (client) return client;

	const url = import.meta.env.TURSO_DATABASE_URL || process.env.TURSO_DATABASE_URL;
	const authToken = import.meta.env.TURSO_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN;

	if (url && !url.startsWith('file:')) {
		client = createClient({ url, authToken });
	} else {
		const dir = path.join(process.cwd(), 'data');
		mkdirSync(dir, { recursive: true });
		const fileUrl = url || `file:${path.join(dir, 'cms.db')}`;
		client = createClient({ url: fileUrl });
	}

	return client;
}

async function ensureTable(db: Client) {
	await db.execute(`
		CREATE TABLE IF NOT EXISTS kv (
			key TEXT PRIMARY KEY,
			value TEXT NOT NULL,
			updated_at TEXT NOT NULL
		)
	`);
}

export async function readStore(): Promise<CmsStore> {
	const db = getDb();
	await ensureTable(db);
	const result = await db.execute({
		sql: 'SELECT value FROM kv WHERE key = ?',
		args: [STORE_KEY],
	});

	if (result.rows.length === 0) {
		const seed = createSeedStore();
		await writeStore(seed);
		return seed;
	}

	return JSON.parse(String(result.rows[0].value)) as CmsStore;
}

export async function writeStore(store: CmsStore): Promise<void> {
	const db = getDb();
	await ensureTable(db);
	await db.execute({
		sql: `
			INSERT INTO kv (key, value, updated_at)
			VALUES (?, ?, ?)
			ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
		`,
		args: [STORE_KEY, JSON.stringify(store), new Date().toISOString()],
	});
}

export async function updateProfile(profile: Profile) {
	const store = await readStore();
	store.profile = profile;
	await writeStore(store);
	return store.profile;
}

export async function updateCinemaCopy(intro: string, habit: string) {
	const store = await readStore();
	store.cinemaIntro = intro;
	store.cinemaHabit = habit;
	await writeStore(store);
}

export async function listMovies() {
	const store = await readStore();
	return [...store.movies].sort((a, b) => a.rank - b.rank);
}

export async function saveMovies(movies: Movie[]) {
	const store = await readStore();
	store.movies = movies;
	await writeStore(store);
	return store.movies;
}

export async function listSkills() {
	const store = await readStore();
	return [...store.skills].sort((a, b) => a.sort - b.sort);
}

export async function saveSkills(skills: Skill[]) {
	const store = await readStore();
	store.skills = skills;
	await writeStore(store);
	return store.skills;
}

export async function listProjects() {
	const store = await readStore();
	return [...store.projects].sort((a, b) => a.sort - b.sort);
}

export async function saveProjects(projects: Project[]) {
	const store = await readStore();
	store.projects = projects;
	await writeStore(store);
	return store.projects;
}

export async function listTimeline() {
	const store = await readStore();
	return [...store.timeline].sort((a, b) => a.sort - b.sort);
}

export async function saveTimeline(timeline: TimelineItem[]) {
	const store = await readStore();
	store.timeline = timeline;
	await writeStore(store);
	return store.timeline;
}

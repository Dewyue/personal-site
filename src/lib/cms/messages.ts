import { createClient, type Client } from '@libsql/client';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { nanoid } from 'nanoid';

export type ContactMessage = {
	id: string;
	name: string;
	email: string;
	intent: 'resume' | 'general';
	body: string;
	status: 'unread' | 'read' | 'replied';
	createdAt: string;
	updatedAt: string;
	adminNote?: string;
};

const MESSAGES_KEY = 'cms_messages_v1';

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

async function readAll(): Promise<ContactMessage[]> {
	const db = getDb();
	await ensureTable(db);
	const result = await db.execute({
		sql: 'SELECT value FROM kv WHERE key = ?',
		args: [MESSAGES_KEY],
	});
	if (result.rows.length === 0) return [];
	return JSON.parse(String(result.rows[0].value)) as ContactMessage[];
}

async function writeAll(messages: ContactMessage[]) {
	const db = getDb();
	await ensureTable(db);
	await db.execute({
		sql: `
			INSERT INTO kv (key, value, updated_at)
			VALUES (?, ?, ?)
			ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
		`,
		args: [MESSAGES_KEY, JSON.stringify(messages), new Date().toISOString()],
	});
}

export async function listMessages() {
	const messages = await readAll();
	return messages.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function countUnreadMessages() {
	const messages = await readAll();
	return messages.filter((m) => m.status === 'unread').length;
}

export async function createMessage(input: {
	name: string;
	email: string;
	intent: 'resume' | 'general';
	body: string;
}) {
	const now = new Date().toISOString();
	const message: ContactMessage = {
		id: nanoid(12),
		name: input.name,
		email: input.email,
		intent: input.intent,
		body: input.body,
		status: 'unread',
		createdAt: now,
		updatedAt: now,
	};
	const messages = await readAll();
	messages.push(message);
	await writeAll(messages);
	return message;
}

export async function updateMessage(
	id: string,
	patch: Partial<Pick<ContactMessage, 'status' | 'adminNote'>>,
) {
	const messages = await readAll();
	const idx = messages.findIndex((m) => m.id === id);
	if (idx < 0) return null;
	messages[idx] = {
		...messages[idx],
		...patch,
		updatedAt: new Date().toISOString(),
	};
	await writeAll(messages);
	return messages[idx];
}

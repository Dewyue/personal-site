/// <reference types="astro/client" />

declare namespace App {
	interface Locals {
		adminEmail?: string;
	}
}

interface ImportMetaEnv {
	readonly ADMIN_EMAIL?: string;
	readonly ADMIN_PASSWORD?: string;
	readonly ADMIN_SESSION_SECRET?: string;
	readonly TURSO_DATABASE_URL?: string;
	readonly TURSO_AUTH_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

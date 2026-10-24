import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { boolean, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
// src/db/schema.ts
var schema_exports = /* @__PURE__ */ __exportAll({
	links: () => links,
	users: () => users
});
var users = pgTable("users", {
	id: text("id").primaryKey(),
	username: text("username").notNull().unique(),
	displayName: text("display_name").notNull(),
	bio: text("bio"),
	avatarUrl: text("avatar_url"),
	themeBackground: text("theme_background").default("#e6e9e3"),
	createdAt: timestamp("created_at").defaultNow()
});
var links = pgTable("links", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	userId: text("user_id").references(() => users.id).notNull(),
	title: text("title").notNull(),
	url: text("url").notNull(),
	bgColor: text("bg_color").default("#ffffff"),
	orderIndex: integer("order_index").notNull().default(0),
	isActive: boolean("is_active").default(true)
});
// src/db/index.ts
var client = postgres(void 0, { prepare: false });
var db = drizzle(client, { schema: schema_exports });
export { links as n, users as r, db as t };

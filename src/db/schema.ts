import { pgTable, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(), 
  displayName: text('display_name').notNull(),
  bio: text('bio'),
  avatarUrl: text('avatar_url'),
  themeBackground: text('theme_background').default('#e6e9e3'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const links = pgTable('links', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: text('user_id').references(() => users.id).notNull(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  bgColor: text('bg_color').default('#ffffff'), 
  orderIndex: integer('order_index').notNull().default(0), 
  isActive: boolean('is_active').default(true),
});
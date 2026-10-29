import { pgTable, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  displayName: text('display_name').notNull(),
  bio: text('bio'),
  avatarUrl: text('avatar_url'),
  
  // Colors
  customBg: text('custom_bg').default('#f8fafc'),
  customText: text('custom_text').default('#0f172a'),
  customButton: text('custom_button').default('#3b82f6'),
  customButtonText: text('custom_button_text').default('#ffffff'),
  
  // NEW: Advanced Theme Settings
  fontFamily: text('font_family').default('font-sans'),
  buttonShape: text('button_shape').default('rounded-2xl'),
  buttonStyle: text('button_style').default('fill'),
  
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
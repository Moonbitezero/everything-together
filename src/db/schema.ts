import { pgTable, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  displayName: text('display_name').notNull(),
  bio: text('bio'),
  avatarUrl: text('avatar_url'),
  
  // Colors & Gradients
  bgType: text('bg_type').default('solid'), // 'solid' | 'gradient' | 'image' | 'video'
  customBg: text('custom_bg').default('#0f172a'),
  gradientTo: text('gradient_to').default('#3b82f6'),
  bgMediaUrl: text('bg_media_url').default(''), // Image, GIF, or MP4 background URL
  
  customText: text('custom_text').default('#ffffff'),
  customButton: text('custom_button').default('#3b82f6'),
  customButtonText: text('custom_button_text').default('#ffffff'),
  
  // Shapes, Styles & Animations
  fontFamily: text('font_family').default('font-sans'),
  buttonShape: text('button_shape').default('rounded-2xl'),
  buttonStyle: text('button_style').default('fill'), // 'fill' | 'outline' | 'glass' | 'brutalist'
  buttonAnimation: text('button_animation').default('scale'), // 'scale' | 'lift' | 'glow' | 'pulse'
  
  // Audio & Intro Video
  audioUrl: text('audio_url').default(''), // MP3 voiceover or background song
  introVideoUrl: text('intro_video_url').default(''), // Featured intro video / YouTube / MP4 clip
  
  createdAt: timestamp('created_at').defaultNow(),
});

export const links = pgTable('links', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: text('user_id').references(() => users.id).notNull(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  iconUrl: text('icon_url').default(''), // Custom image or GIF on the link button
  bgColor: text('bg_color').default('#ffffff'), 
  orderIndex: integer('order_index').notNull().default(0), 
  isActive: boolean('is_active').default(true),
});
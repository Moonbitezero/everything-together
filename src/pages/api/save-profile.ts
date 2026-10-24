// src/pages/api/save-profile.ts
import type { APIRoute } from 'astro';
import { db } from '../../db/index';
import { users } from '../../db/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    await db.insert(users).values({
      id: data.id,
      username: data.username.toLowerCase().trim(),
      displayName: data.displayName,
      bio: data.bio || '',
      avatarUrl: data.avatarUrl || '',
      themeBackground: data.themeBackground || '#e6e9e3',
    }).onConflictDoUpdate({
      target: users.id,
      set: {
        username: data.username.toLowerCase().trim(),
        displayName: data.displayName,
        bio: data.bio || '',
        avatarUrl: data.avatarUrl || '',
        themeBackground: data.themeBackground || '#e6e9e3',
      }
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Username might be taken or error occurred.' }), { status: 500 });
  }
}
import type { APIRoute } from 'astro';
import { db } from '../../db';
import { profiles } from '../../db/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, username, displayName, bio, avatarUrl, themeBackground } = await request.json();

    if (!id || !username) {
      return new Response(JSON.stringify({ error: 'User ID and username are required' }), { status: 400 });
    }

    const cleanUsername = username.trim().toLowerCase();

    await db
      .insert(profiles)
      .values({
        id,
        username: cleanUsername,
        displayName,
        bio,
        avatarUrl,
        themeBackground,
      })
      .onConflictDoUpdate({
        target: profiles.id,
        set: {
          username: cleanUsername,
          displayName,
          bio,
          avatarUrl,
          themeBackground,
        },
      });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Save Profile Error:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Database error while saving profile' }),
      { status: 500 }
    );
  }
};
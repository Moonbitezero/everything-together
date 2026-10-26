import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq, and, ne } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, username, displayName, bio, avatarUrl, themeBackground } = await request.json();

    if (!id || !username) {
      return new Response(JSON.stringify({ error: 'User ID and username are required' }), { status: 400 });
    }

    const cleanUsername = username.trim().toLowerCase();

    // Check if another user ID already owns this username
    const existingUser = await db
      .select()
      .from(users)
      .where(and(eq(users.username, cleanUsername), ne(users.id, id)))
      .limit(1);

    if (existingUser.length > 0) {
      return new Response(
        JSON.stringify({
          error: `The username "${cleanUsername}" is already used by another account. Try a different username (or delete the old row in Supabase Table Editor).`,
        }),
        { status: 409 }
      );
    }

    await db
      .insert(users)
      .values({
        id,
        username: cleanUsername,
        displayName: displayName || cleanUsername,
        bio: bio || '',
        avatarUrl: avatarUrl || '',
        themeBackground: themeBackground || 'minimal-light',
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          username: cleanUsername,
          displayName: displayName || cleanUsername,
          bio: bio || '',
          avatarUrl: avatarUrl || '',
          themeBackground: themeBackground || 'minimal-light',
        },
      });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Save Profile Error:', error);
    const pgError = error?.cause?.message || error?.message || 'Database error while saving profile';
    return new Response(JSON.stringify({ error: pgError }), { status: 500 });
  }
};
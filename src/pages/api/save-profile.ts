import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq, and, ne } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { id, username, displayName, bio, avatarUrl, customBg, customText, customButton, customButtonText } = await request.json();

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
      return new Response(JSON.stringify({ error: 'Username taken.' }), { status: 409 });
    }

    await db
      .insert(users)
      .values({
        id,
        username: cleanUsername,
        displayName: displayName || cleanUsername,
        bio: bio || '',
        avatarUrl: avatarUrl || '',
        customBg: customBg || '#f8fafc',
        customText: customText || '#0f172a',
        customButton: customButton || '#3b82f6',
        customButtonText: customButtonText || '#ffffff',
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          username: cleanUsername,
          displayName: displayName || cleanUsername,
          bio: bio || '',
          avatarUrl: avatarUrl || '',
          customBg: customBg || '#f8fafc',
          customText: customText || '#0f172a',
          customButton: customButton || '#3b82f6',
          customButtonText: customButtonText || '#ffffff',
        },
      });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.cause?.message || 'Database error' }), { status: 500 });
  }
};
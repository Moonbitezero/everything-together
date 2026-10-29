import type { APIRoute } from 'astro';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq, and, ne } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { id, username, displayName, bio, avatarUrl, customBg, customText, customButton, customButtonText, fontFamily, buttonShape, buttonStyle } = data;

    if (!id || !username) {
      return new Response(JSON.stringify({ error: 'User ID and username are required' }), { status: 400 });
    }

    const cleanUsername = username.trim().toLowerCase();

    const existingUser = await db
      .select().from(users)
      .where(and(eq(users.username, cleanUsername), ne(users.id, id))).limit(1);

    if (existingUser.length > 0) return new Response(JSON.stringify({ error: 'Username taken.' }), { status: 409 });

    const profileData = {
      username: cleanUsername,
      displayName: displayName || cleanUsername,
      bio: bio || '',
      avatarUrl: avatarUrl || '',
      customBg: customBg || '#f8fafc',
      customText: customText || '#0f172a',
      customButton: customButton || '#3b82f6',
      customButtonText: customButtonText || '#ffffff',
      fontFamily: fontFamily || 'font-sans',
      buttonShape: buttonShape || 'rounded-2xl',
      buttonStyle: buttonStyle || 'fill',
    };

    await db.insert(users).values({ id, ...profileData })
      .onConflictDoUpdate({ target: users.id, set: profileData });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.cause?.message || 'Database error' }), { status: 500 });
  }
};
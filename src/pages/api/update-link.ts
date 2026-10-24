import type { APIRoute } from 'astro';
import { db } from '../../db';
import { links } from '../../db/schema';
import { eq, and } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userId, linkId, title, url } = await request.json();

    if (!userId || !linkId || !title || !url) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    await db
      .update(links)
      .set({ title, url })
      .where(and(eq(links.id, Number(linkId)), eq(links.userId, userId)));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to update link' }), { status: 500 });
  }
};
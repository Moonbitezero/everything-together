// src/pages/api/track-click.ts
import type { APIRoute } from 'astro';
import { db } from '../../db/index';
import { links } from '../../db/schema';
import { eq, sql } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { linkId } = await request.json();
    
    await db
      .update(links)
      .set({ clicks: sql`COALESCE(${links.clicks}, 0) + 1` })
      .where(eq(links.id, linkId));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to track click' }), { status: 500 });
  }
}
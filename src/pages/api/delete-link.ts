// src/pages/api/delete-link.ts
import type { APIRoute } from 'astro';
import { db } from '../../db/index';
import { links } from '../../db/schema';
import { eq, and } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Delete the specific link that belongs to this user
    await db.delete(links).where(and(eq(links.id, data.linkId), eq(links.userId, data.userId)));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete' }), { status: 500 });
  }
}
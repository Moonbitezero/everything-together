// src/pages/api/add-link.ts
import type { APIRoute } from 'astro';
import { db } from '../../db/index';
import { links } from '../../db/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Insert the new link into the database using Drizzle
    await db.insert(links).values({
      userId: data.userId,
      title: data.title,
      url: data.url,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to save link' }), { status: 500 });
  }
}
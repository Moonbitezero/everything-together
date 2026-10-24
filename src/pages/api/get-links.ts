// src/pages/api/get-links.ts
import type { APIRoute } from 'astro';
import { db } from '../../db/index';
import { links } from '../../db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const userLinks = await db.select().from(links).where(eq(links.userId, data.userId));
  return new Response(JSON.stringify(userLinks), { status: 200 });
}
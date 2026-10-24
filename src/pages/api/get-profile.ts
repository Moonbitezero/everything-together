// src/pages/api/get-profile.ts
import type { APIRoute } from 'astro';
import { db } from '../../db/index';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const result = await db.select().from(users).where(eq(users.id, data.userId));
    return new Response(JSON.stringify(result[0] || null), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load profile' }), { status: 500 });
  }
}
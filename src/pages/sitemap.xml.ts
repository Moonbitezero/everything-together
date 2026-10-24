// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { db } from '../db/index';
import { users } from '../db/schema';

export const GET: APIRoute = async ({ url }) => {
  const siteUrl = url.origin; // Automatically uses localhost or your live domain
  const allUsers = await db.select({ username: users.username }).from(users);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/login</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  ${allUsers
    .map(
      (u) => `<url>
    <loc>${siteUrl}/${u.username}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
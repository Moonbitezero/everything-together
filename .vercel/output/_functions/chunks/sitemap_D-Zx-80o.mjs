import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as users, t as db } from "./db_D5rK-EQx.mjs";
// src/pages/sitemap.xml.ts
var sitemap_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ url }) => {
	const siteUrl = url.origin;
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
  ${(await db.select({ username: users.username }).from(users)).map((u) => `<url>
    <loc>${siteUrl}/${u.username}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n  ")}
</urlset>`;
	return new Response(xml, {
		status: 200,
		headers: { "Content-Type": "application/xml" }
	});
};
// \0virtual:astro:page:src/pages/sitemap.xml@_@ts
var page = () => sitemap_xml_exports;
export { page };

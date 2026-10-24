import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as links, t as db } from "./db_D5rK-EQx.mjs";
import { eq } from "drizzle-orm";
// src/pages/api/get-links.ts
var get_links_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	const data = await request.json();
	const userLinks = await db.select().from(links).where(eq(links.userId, data.userId));
	return new Response(JSON.stringify(userLinks), { status: 200 });
};
// \0virtual:astro:page:src/pages/api/get-links@_@ts
var page = () => get_links_exports;
export { page };

import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as links, t as db } from "./db_D5rK-EQx.mjs";
import { and, eq } from "drizzle-orm";
// src/pages/api/delete-link.ts
var delete_link_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		await db.delete(links).where(and(eq(links.id, data.linkId), eq(links.userId, data.userId)));
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to delete" }), { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/delete-link@_@ts
var page = () => delete_link_exports;
export { page };

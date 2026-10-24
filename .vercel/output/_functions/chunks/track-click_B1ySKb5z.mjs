import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as links, t as db } from "./db_D5rK-EQx.mjs";
import { eq, sql } from "drizzle-orm";
// src/pages/api/track-click.ts
var track_click_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const { linkId } = await request.json();
		await db.update(links).set({ clicks: sql`COALESCE(${links.clicks}, 0) + 1` }).where(eq(links.id, linkId));
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to track click" }), { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/track-click@_@ts
var page = () => track_click_exports;
export { page };

import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as links, t as db } from "./db_D5rK-EQx.mjs";
// src/pages/api/add-link.ts
var add_link_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		await db.insert(links).values({
			userId: data.userId,
			title: data.title,
			url: data.url
		});
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Failed to save link" }), { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/add-link@_@ts
var page = () => add_link_exports;
export { page };

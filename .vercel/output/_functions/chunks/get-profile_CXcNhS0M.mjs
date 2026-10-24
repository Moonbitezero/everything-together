import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as users, t as db } from "./db_D5rK-EQx.mjs";
import { eq } from "drizzle-orm";
// src/pages/api/get-profile.ts
var get_profile_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		const result = await db.select().from(users).where(eq(users.id, data.userId));
		return new Response(JSON.stringify(result[0] || null), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to load profile" }), { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/get-profile@_@ts
var page = () => get_profile_exports;
export { page };

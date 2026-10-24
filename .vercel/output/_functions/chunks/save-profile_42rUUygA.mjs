import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as users, t as db } from "./db_D5rK-EQx.mjs";
// src/pages/api/save-profile.ts
var save_profile_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		await db.insert(users).values({
			id: data.id,
			username: data.username.toLowerCase().trim(),
			displayName: data.displayName,
			bio: data.bio || "",
			avatarUrl: data.avatarUrl || "",
			themeBackground: data.themeBackground || "#e6e9e3"
		}).onConflictDoUpdate({
			target: users.id,
			set: {
				username: data.username.toLowerCase().trim(),
				displayName: data.displayName,
				bio: data.bio || "",
				avatarUrl: data.avatarUrl || "",
				themeBackground: data.themeBackground || "#e6e9e3"
			}
		});
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: "Username might be taken or error occurred." }), { status: 500 });
	}
};
// \0virtual:astro:page:src/pages/api/save-profile@_@ts
var page = () => save_profile_exports;
export { page };

import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderHead, f as addAttribute, l as renderTemplate } from "./server_BWCbS0bM.mjs";
import { t as createComponent } from "./compiler__bFnboLJ.mjs";
import { t as createAstro } from "./astro-global_CWQnEULl.mjs";
import { t as renderScript } from "./script_WmDhvudt.mjs";
import "./page-ssr_C6VjgzdO.mjs";
import { n as links, r as users, t as db } from "./db_D5rK-EQx.mjs";
import { eq } from "drizzle-orm";
// src/pages/[username].astro
var _username__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Username,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://everything-together.vercel.app");
var $$Username = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Username;
	const { username } = Astro.params;
	const profile = (await db.select().from(users).where(eq(users.username, username.toLowerCase())))[0];
	if (!profile) return new Response("Profile not found. Log in to /dashboard and save your profile first!", { status: 404 });
	const userLinks = await db.select().from(links).where(eq(links.userId, profile.id));
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Dynamic SEO Title & Description based on the Creator's Profile --><title>${profile.displayName} (@${profile.username}) | EverythingTogether</title><meta name="description"${addAttribute(profile.bio || `Check out ${profile.displayName}'s links, videos, and social updates on EverythingTogether.`, "content")}><!-- Open Graph / Social Previews (When shared on WhatsApp/Telegram/Twitter) --><meta property="og:type" content="profile"><meta property="og:title"${addAttribute(`${profile.displayName} (@{profile.username})`, "content")}><meta property="og:description"${addAttribute(profile.bio || `Explore ${profile.displayName}'s official links.`, "content")}>${profile.avatarUrl && renderTemplate`<meta property="og:image"${addAttribute(profile.avatarUrl, "content")}>`}<!-- Twitter Card --><meta name="twitter:card" content="summary"><meta name="twitter:title"${addAttribute(`${profile.displayName} (@{profile.username})`, "content")}><meta name="twitter:description"${addAttribute(profile.bio || `Explore ${profile.displayName}'s links.`, "content")}>${profile.avatarUrl && renderTemplate`<meta name="twitter:image"${addAttribute(profile.avatarUrl, "content")}>`}${renderHead($$result)}</head><body class="min-h-screen p-8 font-sans flex flex-col items-center pt-16"${addAttribute(`background-color: ${profile.themeBackground || "#e6e9e3"}`, "style")}><div class="max-w-md w-full flex flex-col items-center"><!-- Profile Header --><div class="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] w-full text-center mb-8">${profile.avatarUrl && renderTemplate`<img${addAttribute(profile.avatarUrl, "src")}${addAttribute(profile.displayName, "alt")} class="w-24 h-24 object-cover border-4 border-black mx-auto mb-4 bg-yellow-200 shadow-[4px_4px_0_0_#000]">`}<h1 class="text-3xl font-black uppercase mb-2">${profile.displayName}</h1><p class="font-bold text-gray-700 bg-yellow-200 border-2 border-black inline-block px-3 py-1">@${profile.username}</p>${profile.bio && renderTemplate`<p class="mt-4 font-medium border-t-4 border-black pt-4">${profile.bio}</p>`}</div><!-- Links List --><div class="w-full flex flex-col gap-4">${userLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(link.id, "data-link-id")} class="trackable-link block w-full bg-cyan-200 border-4 border-black text-center p-4 font-black uppercase text-xl shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-yellow-400 transition-all">${link.title}</a>`)}${userLinks.length === 0 && renderTemplate`<div class="bg-white border-4 border-black p-4 text-center font-bold">No links added yet!</div>`}</div><!-- Footer Branding --><a href="/" class="mt-12 bg-white border-2 border-black px-4 py-1 font-black uppercase text-xs shadow-[3px_3px_0_0_#000] hover:bg-yellow-200 transition-all">Built with EverythingTogther</a></div>${renderScript($$result, "D:/EverythingTogether/src/pages/[username].astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/EverythingTogether/src/pages/[username].astro", void 0);
var $$file = "D:/EverythingTogether/src/pages/[username].astro";
var $$url = "/[username]";
// \0virtual:astro:page:src/pages/[username]@_@astro
var page = () => _username__exports;
export { page };

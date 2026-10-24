import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderHead, l as renderTemplate } from "./server_BWCbS0bM.mjs";
import { t as createComponent } from "./compiler__bFnboLJ.mjs";
import { t as renderScript } from "./script_WmDhvudt.mjs";
import "./page-ssr_C6VjgzdO.mjs";
// src/pages/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Login - EverythingTogther</title>${renderHead($$result)}</head><body class="bg-[#e6e9e3] min-h-screen flex items-center justify-center font-sans"><div class="bg-white border-4 border-black p-8 w-full max-w-md shadow-[8px_8px_0_0_#000]"><h1 class="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Join the Club</h1><form id="auth-form" class="space-y-6"><div><label class="block font-bold mb-2 uppercase text-sm">Email</label><input type="email" id="email" class="w-full border-4 border-black p-3 focus:outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0_0_#000]" required></div><div><label class="block font-bold mb-2 uppercase text-sm">Password</label><input type="password" id="password" class="w-full border-4 border-black p-3 focus:outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0_0_#000]" required></div><div id="error-message" class="text-red-600 font-bold hidden border-2 border-red-600 bg-red-100 p-2 text-sm uppercase"></div><div class="flex gap-4 pt-2"><button type="submit" id="login-btn" class="flex-1 bg-yellow-400 border-4 border-black font-black uppercase py-3 shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Log In</button><button type="button" id="signup-btn" class="flex-1 bg-cyan-400 border-4 border-black font-black uppercase py-3 shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Sign Up</button></div></form></div>${renderScript($$result, "D:/EverythingTogether/src/pages/login.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/EverythingTogether/src/pages/login.astro", void 0);
var $$file = "D:/EverythingTogether/src/pages/login.astro";
var $$url = "/login";
// \0virtual:astro:page:src/pages/login@_@astro
var page = () => login_exports;
export { page };

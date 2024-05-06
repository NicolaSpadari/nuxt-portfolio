import { colors } from "@unocss/preset-mini";

const dark800 = typeof colors?.dark === "string" ? colors?.dark : colors?.dark?.[800];

export default defineNuxtConfig({
	modules: [
		"@nuxtjs/supabase",
		"nuxt-swiper",
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@hypernym/nuxt-gsap",
		"@nuxt/image",
		"nuxt-gtag"
	],
	app: {
		head: {
			title: "Nicola Spadari",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "description", content: "My personal portfolio" },
				{ name: "theme-color", content: dark800 },
				{ name: "format-detection", content: "no" }
			],
			link: [
				{ rel: "shortcut-icon", href: "/favicon.ico" }
			],
			noscript: [
				{ children: "JavaScript is required to run this project" }
			],
			bodyAttrs: {
				class: ["custom-scrollbar", "overflow-x-hidden", "bg-dark-800", "font-text"]
			}
		},
		pageTransition: {
			name: "page",
			mode: "out-in"
		}
	},
	gsap: {
		composables: true,
		extraPlugins: {
			scrollTrigger: true
		}
	},
	supabase: {
		redirect: false
	},
	experimental: {
		typedPages: true
	},
	css: [
		"@unocss/reset/tailwind.css",
		"swiper/css"
	],
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => tag.startsWith("i-")
		}
	},
	sourcemap: {
		server: true,
		client: false
	}
});

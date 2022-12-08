export default defineNuxtConfig({
    modules: ["@nuxtjs/supabase", "@vueuse/nuxt", "@unocss/nuxt"],
    runtimeConfig: {
        public: {
            telegramBotId: process.env.TELEGRAM_BOT_ID,
            telegramChatId: process.env.TELEGRAM_CHAT_ID
        }
    },
    css: [
        "@unocss/reset/tailwind.css"
    ],
    nitro: {
        prerender: {
            routes: ["/"]
        }
    },
    app: {
        head: {
            title: "Nicola Spadari",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            meta: [
                { name: "theme-color", content: "#181818" },
                { name: "format-detection", content: "no" }
            ],
            link: [
                { rel: "shortcut-icon", href: "/favicon.ico" }
            ],
            noscript: [
                { children: "JavaScript is required to run this project" }
            ]
        },
        pageTransition: {
            name: "page",
            mode: "out-in"
        }
    }
});

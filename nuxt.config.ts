import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@unocss/nuxt"],
    runtimeConfig: {
        public: {
            telegramBotId: process.env.TELEGRAM_BOT_ID,
            telegramChatId: process.env.TELEGRAM_CHAT_ID
        }
    },
    unocss: {
        preflight: true
    },
    app: {
        head: {
            title: "Nicola Spadari",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "theme-color", content: "#181818" },
                { name: "format-detection", content: "no" }
            ],
            link: [
                { rel: "shortcut-icon", href: "/favicon.ico" }
            ],
            htmlAttrs: {
                lang: "en",
                dir: "ltr"
            }
        },
        pageTransition: {
            name: "page",
            mode: "out-in",
            enterActiveClass: "transition-opacity duration-1000 ease-linear opacity-100",
            leaveActiveClass: "transition-opacity duration-1000 ease-linear opacity-100",
            enterFromClass: "opacity-0",
            leaveToClass: "opacity-0"
        }
    },
    build: {
        transpile: [
            "motion/vue",
            "@motionone/vue"
        ]
    }
});

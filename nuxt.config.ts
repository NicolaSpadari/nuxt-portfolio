import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@unocss/nuxt", "@nuxt/image-edge"],
    runtimeConfig: {
        public: {
            strapiUrl: process.env.STRAPI_URL,
            telegramBotUrl: process.env.TELEGRAM_BOT_URL,
            telegramChatId: process.env.TELEGRAM_CHAT_ID
        }
    },
    unocss: {
        preflight: true
    },
    meta: {
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
            lang: "en"
        }
    }
});

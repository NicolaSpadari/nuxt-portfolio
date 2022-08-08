import { Motion as _motion, Presence as _presence } from "motion/vue";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("Motion", _motion);
    nuxtApp.vueApp.component("Presence", _presence);
});

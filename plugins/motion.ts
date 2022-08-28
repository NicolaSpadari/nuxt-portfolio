// TEMP - to fix
import { Motion as _motion, Presence as _presence } from "@motionone/vue/dist/motion-vue.esm.js"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("Motion", _motion);
    nuxtApp.vueApp.component("Presence", _presence);
});

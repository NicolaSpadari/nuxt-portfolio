export default defineNuxtRouteMiddleware(async (to) => {
    if (!process.dev) {
        const location = await useLocation();
        const { sendMessage } = useMessage();

        await sendMessage(String(to.name), location);
    }
});

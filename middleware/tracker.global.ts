export default defineNuxtRouteMiddleware(async (to) => {
    if (false) {
        const location = await useLocation();
        const { sendMessage } = useMessage();

        await sendMessage(String(to.name), location);
    }
});

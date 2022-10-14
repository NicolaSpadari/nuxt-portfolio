export default defineNuxtRouteMiddleware(async (to) => {
    if (!process.dev) {
        try {
            const location = await useLocation();
            const { sendMessage } = useMessage();

            if (location.city !== "Ashburn") {
                await sendMessage(String(to.name), location);
            }
        } catch (err: any) {
            console.log(err);
        }
    }
});

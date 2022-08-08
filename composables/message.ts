import type { IpLocation } from "@/types";

export const useMessage = () => {
    const sendMessage = async (page: string, location: IpLocation) => {
        const runtimeConfig = useRuntimeConfig();
        const encMsg = encodeURIComponent(`
            V2 - Pagina ${page} visitata da ${location.city} (${location.country_name} - ${location.continent_code})
        `);

        await $fetch(`${runtimeConfig.telegramBotUrl}/sendMessage?chat_id=${runtimeConfig.telegramChatId}&text=${encMsg}&disable_notification=true`, {
            method: "POST"
        });
    };

    return {
        sendMessage
    };
};

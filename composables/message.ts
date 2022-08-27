import type { IpLocation } from "@/types";

export const useMessage = () => {
    const sendMessage = async (page: string, location: IpLocation) => {
        const runtimeConfig = useRuntimeConfig();
        const botId = runtimeConfig.telegramBotUrl;
        const chatId = runtimeConfig.telegramChatId;

        const encMsg = encodeURIComponent(`
            V2 - Pagina ${page} visitata da ${location.city} (${location.country_name} - ${location.continent_code})
        `);

        await $fetch(`https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&text=${encMsg}&disable_notification=true`, {
            method: "POST"
        });
    };

    return {
        sendMessage
    };
};

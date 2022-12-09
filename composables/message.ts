export const useMessage = () => {
    const sendMessage = async (page: string, location: IpLocation) => {
        const { telegramBotId, telegramChatId } = useRuntimeConfig();

        const encMsg = encodeURIComponent(`
            V2 - Pagina ${page} visitata da ${location.city} (${location.country_name} - ${location.continent_code})
        `);

        await $fetch(`https://api.telegram.org/${telegramBotId}/sendMessage?chat_id=${telegramChatId}&text=${encMsg}&disable_notification=true`, {
            method: "POST"
        });
    };

    return {
        sendMessage
    };
};

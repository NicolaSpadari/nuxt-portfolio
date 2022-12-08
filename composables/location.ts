export const useLocation = async () => {
    const data = await $fetch<IpLocation>("https://ipapi.co/json/");
    return data;
};

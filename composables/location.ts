import type { IpLocation } from "@/types";

export const useLocation = async () => {
    const data: IpLocation = await $fetch("https://ipapi.co/json/");
    return data;
};

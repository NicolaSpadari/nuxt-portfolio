import type { Competence, Competences } from "@/types";

const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async () => {
    const { data } = await $fetch<Competences>(`${runtimeConfig.public.strapiUrl}/api/competences?populate=*&locale=en`);

    const res = data.map((comp: Competence) => ({
        id: comp.id,
        title: comp.attributes.title,
        desc: comp.attributes.description,
        image: {
            url: comp.attributes.logo.data.attributes.url,
            alt: comp.attributes.logo.data.attributes.alternativeText
        }
    }));

    return res;
});

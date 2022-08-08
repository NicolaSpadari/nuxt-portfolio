import type { Project, Projects } from "@/types";

const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async () => {
    const { data } = await $fetch<Projects>(`${runtimeConfig.public.strapiUrl}/api/projects?populate=*&locale=en`);

    const res = data.map((prj: Project) => ({
        id: prj.id,
        title: prj.attributes.title,
        desc: prj.attributes.description,
        link: prj.attributes.link,
        image: {
            url: prj.attributes.image.data.attributes.url,
            alt: prj.attributes.image.data.attributes.alternativeText
        }
    }));

    return res;
});

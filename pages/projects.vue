<template>
    <div relative>
        <StructurePageTitle left-8 />

        <div container lg="max-w-screen" h-screen flex items-center>
            <div
                ref="carousel"
                class="custom-scrollbar"
                carousel flex flex-col lg="flex-row space-x-50 px-0 py-7" py-15 px-5
            >
                <ProjectCard v-for="item in projects" :key="item.id" :item="item" @hovered="showTitle" />
            </div>
        </div>

        <Transition name="page">
            <p v-if="activeProject" hidden lg="block" absolute text-white text-3xl absolute-center-h bottom-15rem>
                {{ activeProject.title }}
            </p>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
    import type { Project } from "@/types";
    
    definePageMeta({
        pageTransition: {
            name: "page"
        }
    });

    const { data: projects } = await useFetch("/api/projects");

    const carousel = ref<HTMLElement | null>(null);
    const activeProject = ref<Project | null>(null);

    const scrollHorizontally = useThrottleFn((e) => {
        const delta = e.deltaY;

        let contWidth: number = e.target?.offsetWidth;

        if (delta < 0) {
            contWidth = -contWidth;
        }

        carousel.value!.scrollLeft += contWidth;
    }, 150);

    useEventListener(carousel, "wheel", (e) => {
        e.preventDefault();
        scrollHorizontally(e);
    });

    const showTitle = (item: Project): void => {
        if (item === activeProject.value) {
            activeProject.value = null;
        } else {
            activeProject.value = item;
        }
    };
</script>

<style scoped>
    [carousel]{
        @apply overflow-y-scroll max-h-100vh lg:(max-h-unset overflow-y-visible overflow-x-auto) snap-x snap-mandatory scroll-p-3 scroll-smooth;
    }
</style>

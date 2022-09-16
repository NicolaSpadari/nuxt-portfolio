<template>
    <PageWrapper>
        <StructurePageTitle left-8 />

        <div container lg="max-w-screen" h-screen flex justify-center items-center>
            <div
                ref="carousel"
                class="custom-scrollbar"
                carousel flex flex-col lg="flex-row space-x-50 px-0 py-7" py-15 px-5
            >
                <ProjectCard v-for="item in projects" :key="item.id" :item="item" @hovered="showTitle" />

                <svg id="filter-wrapper" viewBox="0 -13 100 37" preserveAspectRatio="xMinYMid meet">
                    <defs>
                        <filter id="gooey">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                            <feColorMatrix
                                in="blur" mode="matrix" values="
                                1 0 0 0 0
                                0 1 0 0 0
                                1 0 1 0 0
                                0 0 0 15 -8" result="goo"
                            />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                    <g>
                        <text id="text1" x="0" y="15">Hover a project</text>
                        <text id="text2" x="0" y="15">{{ activeProject?.title || "VivoCasa" }}</text>
                    </g>
                </svg>
            </div>
        </div>
    </PageWrapper>
</template>

<script lang="ts" setup>
    import type { Project } from "@/types";

    const { data: projects } = await useFetch("/api/projects");

    const carousel = ref<HTMLElement | null>(null);
    const activeProject = ref<Project | null>(null);
    const text = ref();

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

    const showTitle = useThrottleFn((item: Project) => {
        activeProject.value = item;
    }, 1000);
</script>

<style lang="scss" scoped>
    [carousel]{
        @apply overflow-y-scroll max-h-100vh lg:(max-h-unset overflow-y-visible overflow-x-auto) snap-x snap-mandatory scroll-p-3 scroll-smooth;
    }

    .project:hover ~ #filter-wrapper{
        #text1{
            opacity: 0;
        }
        #text2{
            opacity: 1;
        }
    }

    #filter-wrapper{
        @apply text-4xl fill-light-50 font-bold absolute h-10 w-70 hidden lg:block absolute-center-h bottom-15rem;
        margin: 0 auto;

        g{
            filter: url(#gooey);
        }

        text{
            @apply origin-cc transition-opacity duration-1000;
            transform-box: view-box;
        }

        #text2{
            opacity: 0;
        }
    }
</style>

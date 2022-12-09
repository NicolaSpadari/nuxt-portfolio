<template>
    <PageWrapper>
        <StructurePageTitle left-8 />

        <div crate lg="max-w-screen" h-screen flex justify-center items-center>
            <div
                ref="carousel"
                class="custom-scrollbar"
                carousel flex flex-col lg="flex-row space-x-50 px-0 py-7" py-15 px-5
            >
                <ProjectCard v-for="item in projects" :key="item.id" :item="item" />
            </div>
        </div>
    </PageWrapper>
</template>

<script lang="ts" setup>
    const { data: projects } = await useFetch("/api/projects", {
        headers: useRequestHeaders(["cookie"]) as Record<string, string>
    });

    const carousel = ref<HTMLElement | null>(null);

    const scrollHorizontally = useThrottleFn((e: any) => {
        const delta = e.deltaY;

        let contWidth: number = e.target?.offsetWidth;

        if (delta < 0) {
            contWidth = -contWidth;
        }

        carousel.value!.scrollLeft += contWidth;
    }, 150);

    useEventListener(carousel, "wheel", (e: any) => {
        e.preventDefault();
        scrollHorizontally(e);
    });
</script>

<style lang="scss" scoped>
    [carousel]{
        @apply overflow-y-scroll max-h-100vh lg:(max-h-unset overflow-y-visible overflow-x-auto) snap-x snap-mandatory scroll-p-3 scroll-smooth;
    }
</style>

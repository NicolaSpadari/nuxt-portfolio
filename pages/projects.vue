<template>
    <div>
        <StructurePageTitle left-8 />

        <div flex h-screen items-center overflow-y-hidden>
            <Swiper
                :breakpoints="breakpoints"
                :direction="direction"
                :scrollbar="{
                    draggable: true,
                    verticalClass: 'hidden',
                    dragClass: 'swiper-scrollbar-drag grab',
                    horizontalClass: 'swiper-scrollbar-horizontal w-3/4! absolute-center-h! bottom-unset! top-0!',
                }"
                :modules="[Mousewheel, Scrollbar]"
                :mousewheel="true"
                :height="500"
                :width="width"
                h-90vh md="h-auto" z-30 uw="z-80"
            >
                <SwiperSlide v-for="item in projects" :key="item.id">
                    <ProjectCard :item="item" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Mousewheel, Scrollbar } from "swiper";

    const { data: projects } = await useFetch("/api/projects", {
        headers: useRequestHeaders(["cookie"]) as Record<string, string>
    });

    const { width } = useWindowSize();

    const direction = width.value > 768 ? "horizontal" : "vertical";

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        1200: {
            slidesPerView: 3.3,
            spaceBetween: 70
        },
        1400: {
            slidesPerView: 4.2,
            spaceBetween: 60
        },
    };

    useHead({
        meta: [
            { name: "description", content: "A list of projects I worked on" }
        ]
    });
</script>

<style lang="scss">
    @import "swiper/scss/scrollbar";
</style>

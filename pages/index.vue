<template>
    <PageWrapper h-screen overflow-hidden z-5>
        <div flex justify-center h-full p-8 lg="p-16">
            <div w-75vw relative my-auto :style="imageEffect">
                <Parallax relative lg="w-screen-xs mx-auto" h-125 />
            </div>
        </div>

        <div absolute flex justify-center w-full top-16 :style="titleEffect">
            <img src="assets/images/signature-static.svg" w-30>
        </div>

        <div absolute flex justify-center w-full h-full inset-0 pointer-events-none :style="textEffect">
            <div overflow-y-hidden my-auto>
                <div select-none flex flex-col lg="flex-row space-x-12" font-heading text-light-50 transition-colors duration-500 bordered font-extralight uppercase tracking-widest justify-center>
                    <Animation
                        tag="p"
                        :initial="{ y: 200 }"
                        :transition="{ delay: 1.25, duration: 1 }"
                        :final="{ y: 0 }"
                        text-center lg="text-left"
                    >
                        <span class="clamp">Nicola</span>
                    </Animation>
                    <Animation
                        tag="p"
                        :initial="{ y: -200 }"
                        :transition="{ delay: 1.25, duration: 1 }"
                        :final="{ y: 0 }"
                        text-center lg="text-left"
                    >
                        <span class="clamp">Spadari</span>
                    </Animation>
                </div>
            </div>
        </div>
    </PageWrapper>
</template>

<script lang="ts" setup>
    import type { UseMouseReturn } from "@vueuse/core";

    const coords = reactive<UseMouseReturn>({
        x: ref(0),
        y: ref(0),
        sourceType: ref("mouse")
    });

    useTimeoutFn(() => {
        coords.x = useMouse({ touch: false }).x;
        coords.y = useMouse({ touch: false }).y;
    }, 3700);

    const textEffect = computed(() => ({
        transform: `translateX(${coords.x / 45}px) translateY(-${coords.y / 45}px)`,
        transition: ".3s ease-out all"
    }));

    const titleEffect = computed(() => ({
        transform: `translateX(${coords.x / 100}px) translateY(-${coords.y / 100}px)`,
        transition: ".3s ease-out all"
    }));

    const imageEffect = computed(() => ({
        transform: `translateX(-${coords.x / 50}px) translateY(${coords.y / 50}px)`,
        transition: ".3s ease-out all"
    }));
</script>

<style>
    .clamp{
        font-size: clamp(3rem, 8vw, 10rem);
    }
</style>

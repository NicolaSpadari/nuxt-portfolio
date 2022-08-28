<template>
    <PageWrapper h-screen overflow-hidden z-5>
        <div flex justify-center h-full p-8 lg="p-16">
            <div w-75vw relative my-auto :style="imageEffect">
                <Parallax relative lg="w-screen-xs mx-auto" h-125 />
            </div>
        </div>

        <div absolute flex justify-center w-full top-16 :style="titleEffect">
            <img src="assets/images/signature-static.svg" w-30 />
        </div>

        <div absolute flex justify-center w-full h-full inset-0 :style="textEffect">
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
    const { x, y } = useMouse({ touch: false });

    const textEffect = computed(() => ({
        transform: `translateX(${x.value / 45}px) translateY(-${y.value / 45}px)`
    }));

    const titleEffect = computed(() => ({
        transform: `translateX(${x.value / 100}px) translateY(-${y.value / 100}px)`
    }));

    const imageEffect = computed(() => ({
        transform: `translateX(-${x.value / 50}px) translateY(${y.value / 50}px)`
    }));
</script>

<style scoped>
    .clamp{
        font-size: clamp(3rem, 8vw, 10rem);
    }
</style>

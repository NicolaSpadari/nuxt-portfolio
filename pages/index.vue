<template>
    <div relative h-screen overflow-hidden z-65>
        <ClientOnly>
            <div flex justify-center h-full p-8 lg="p-16">
                <div w-75vw relative my-auto :style="imageEffect">
                    <Parallax relative lg="w-screen-xs mx-auto" h-125 />
                </div>
            </div>

            <div absolute flex justify-center w-full top-16 :style="titleEffect">
                <img src="@/assets/images/signature-static.svg" w-30>
            </div>
        </ClientOnly>

        <div absolute flex justify-center w-full h-full inset-0 pointer-events-none :style="textEffect">
            <div overflow-y-hidden my-auto>
                <div select-none flex flex-col lg="flex-row space-x-12" font-heading text-light-50 transition-colors duration-500 bordered font-extralight uppercase tracking-widest justify-center>
                    <Animation
                        tag="p"
                        :initial="{ y: width > 768 ? 200 : -200 }"
                        :transition="{ delay: 1.25, duration: 1 }"
                        :final="{ y: 0 }"
                        text-center lg="text-left"
                    >
                        <span class="clamp">Nicola</span>
                    </Animation>
                    <Animation
                        tag="p"
                        :initial="{ y: width > 768 ? -200 : 200 }"
                        :transition="{ delay: 1.25, duration: 1 }"
                        :final="{ y: 0 }"
                        text-center lg="text-left"
                    >
                        <span class="clamp">Spadari</span>
                    </Animation>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { width } = useWindowSize();
    const { x, y } = useMouse({ touch: false });

    const textEffect = computed(() => ({
        transform: width.value > 768 ? `translateX(${x.value / 45}px) translateY(-${y.value / 45}px)` : "none"
    }));

    const titleEffect = computed(() => ({
        transform: width.value > 768 ? `translateX(${x.value / 100}px) translateY(-${y.value / 100}px)` : "none"
    }));

    const imageEffect = computed(() => ({
        transform: width.value > 768 ? `translateX(-${x.value / 50}px) translateY(${y.value / 50}px)` : "none"
    }));
</script>

<style>
    .clamp{
        font-size: clamp(3rem, 8vw, 10rem);
    }
</style>

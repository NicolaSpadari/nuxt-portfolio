<template>
    <div ref="comp" aspect-square relative bg-dark-400 :class="{ 'cursor-pointer transform hover:scale-93 transition-transform duration-300 ease-out-expo': !isMobile }">
        <Presence>
            <Motion
                :key="String(props.active)"
                absolute w-full flex justify-center items-center h-full
                :initial="{ opacity: 0, scale: 0.85 }"
                :animate="{ opacity: 1, scale: 1, transition: { delay: 0.1 } }"
                :exit="{ opacity: 0, scale: 0.85 }"
            >
                <img v-if="!props.active" :src="props.item.image" max-h-20>
                <div v-else divide-y-3 divide-light-50 size-full p-7>
                    <div flex items-center space-x-2>
                        <p text-light-50 text-6xl font-extralight font-heading mb-3>
                            {{ position }}
                        </p>
                        <img :src="props.item.image" w-8 :alt="props.item.title">
                    </div>
                    <div pt-7>
                        <p text-light-50 text-2xl font-bold mb-3>
                            {{ props.item.title }}
                        </p>
                        <p text-light-50 hidden uw="block">
                            {{ props.item.description }}
                        </p>
                    </div>
                </div>
            </Motion>
        </Presence>
    </div>
</template>

<script lang="ts" setup>
    import type { Competence } from "@/types";

    const props = defineProps<{
        item: Competence
        index: number
        active: boolean
    }>();

    const emits = defineEmits(["activated"]);
    const comp = ref<HTMLElement>();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { isOutside } = useMouseInElement(comp);

    const setActive = (item: Competence | null) => {
        if (!isMobile.value) {
            emits("activated", item);
        }
    };

    watch(isOutside, (outside) => {
        !outside ? setActive(props.item) : setActive(null);
    });

    const position = String(1 + props.index).padStart(2, "0");
</script>

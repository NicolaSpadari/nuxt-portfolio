<template>
    <div ref="comp" animated-border flex-shrink-0 snap-start snap-always p-10 class="group">
        <NuxtLink :to="props.item.link">
            <img :src="props.item.image" :alt="props.item.title" rounded-lg />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    import type { Project } from "@/types";

    const props = defineProps<{
        item: Project
    }>();

    const emits = defineEmits(["hovered"]);

    const comp = ref<HTMLElement>();
    const { isOutside } = useMouseInElement(comp);

    const setActive = (item: Project | null) => {
        emits("hovered", item);
    };

    watch(isOutside, (outside) => {
        !outside ? setActive(props.item) : setActive(null);
    });
</script>

<style lang="scss" scoped>
    [animated-border]{
        @apply relative z-0 m-20px rounded-lg overflow-hidden p-6px;

        &:before,
        &:after{
            @apply content-empty absolute;
        }

        &:before{
            @apply transition-opacity duration-500 opacity-0 z--2 left--50% top--50% w-200% h-200%;
            background-repeat: no-repeat;
            background-position: 0 0;
            background-image: conic-gradient(transparent, theme("colors.green.300"), theme("colors.teal.300"), transparent 30%);
            animation: border-glow 1.5s linear infinite;
        }

        &:after{
            @apply z--1 left-6px top-6px rounded-5px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
        }

        &:hover:before{
            @apply opacity-60;
        }
    }

    @keyframes border-glow {
        100% {
            transform: rotate(1turn);
        }
    }
</style>

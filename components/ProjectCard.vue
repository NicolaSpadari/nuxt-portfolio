<template>
    <div flex-shrink-0 snap-start snap-always>
        <div p-10 class="animated-border">
            <NuxtLink :to="props.item.link">
                <img :src="props.item.image" :alt="props.item.title" rounded-lg>
            </NuxtLink>
        </div>
        <NuxtLink :to="props.item.link" block text-white font-medium text-2xl text-center class="interact">
            {{ props.item.title }}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        item: Project
    }>();
</script>

<style lang="scss" scoped>
    .animated-border{
        @apply relative z-0 m-20px rounded-lg overflow-hidden p-6px;
    }

    .animated-border{
        &:before{
            @apply content-empty absolute transition-opacity duration-500 opacity-0 z--2 left--50% top--50% w-200% h-200%;
            background-repeat: no-repeat;
            background-position: 0 0;
            background-image: conic-gradient(transparent, theme("colors.green.300"), theme("colors.teal.300"), transparent 30%);
            animation: border-glow 1.5s linear infinite;
        }

        &:after{
            @apply content-empty absolute z--1 left-6px top-6px rounded-5px;
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

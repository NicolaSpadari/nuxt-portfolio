<template>
    <div>
        <Animation
            v-for="(image, index) in imageLayers"
            :key="image.name"
            absolute size-full
            :initial="initialState"
            :transition="{
                ...transition,
                delay: 2 + 0.08 * (1 + index),
            }"
            :final="finalState"
        >
            <img :src="image.name" size-full :alt="image.name">
        </Animation>
    </div>
</template>

<script lang="ts" setup>
    const imageLayers = [
        { strength: 30, name: "/images/parallax/layer-circle.svg" },
        { strength: 10, name: "/images/parallax/layer-bg.svg" },
        { strength: 15, name: "/images/parallax/layer-dark-bg.svg" },
        { strength: 30, name: "/images/parallax/layer-dots.svg" },
        { strength: 40, name: "/images/parallax/layer-squares.svg" },
        { strength: 20, name: "/images/parallax/layer-grass.svg" },
        { strength: 35, name: "/images/parallax/layer-line-square.svg" },
        { strength: 45, name: "/images/parallax/layer-person.svg" },
        { strength: 55, name: "/images/parallax/layer-line.svg" }
    ];

    const initialState = {
        opacity: 0,
        y: -150
    };

    const finalState = {
        opacity: 1,
        y: 0
    };

    const transition = {
        duration: 1.25,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)"
    };
</script>

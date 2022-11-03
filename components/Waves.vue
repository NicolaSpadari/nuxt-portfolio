<template>
    <div pointer-events="none" absolute z-4 inset="x-0" z="10">
        <svg viewBox="0 0 120 28">
            <Motion
                tag="path"
                :d="wave"
                :initial="{ x: 0, y: 15 }"
                :animate="{ x: '-100%' }"
                :transition="wave1"
                fill-dark-800 transition-colors duration-500
            />
            <Motion
                tag="path"
                :d="wave"
                :initial="{ x: '-100%', y: 0 }"
                :animate="{ x: 0 }"
                :transition="wave2"
                fill-dark-800 fill-opacity="!25" transition-colors duration-500
            />
            <Motion
                tag="path"
                :d="wave"
                :initial="{ x: 0, y: -20 }"
                :animate="{ x: '-100%' }"
                :transition="wave3"
                fill-dark-800 fill-opacity="!10" transition-colors duration-500
            />
        </svg>
    </div>
</template>

<script lang="ts" setup>
    const wave = "M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z";

    const wave1 = {
        duration: 8,
        easing: "linear",
        repeat: Infinity
    };
    const wave2 = {
        duration: 10,
        easing: "linear",
        repeat: Infinity
    };
    const wave3 = {
        duration: 5,
        easing: "linear",
        repeat: Infinity
    };
</script>

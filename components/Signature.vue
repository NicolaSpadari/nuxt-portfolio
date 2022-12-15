<template>
    <ClientOnly>
        <svg v-if="!playedOnce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.3 179.2" text-gray-50 size-full>
            <Motion
                v-for="(segment, index) in letter1.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.015,
                    delay: (index * 0.015),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
            <Motion
                v-for="(segment, index) in letter2.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.01,
                    delay: 0.5 + (index * 0.01),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
            <Motion
                v-for="(segment, index) in letter3.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.01,
                    delay: 0.8 + (index * 0.01),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
            <Motion
                v-for="(segment, index) in letter4.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.01,
                    delay: 1 + (index * 0.01),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
            <Motion
                v-for="(segment, index) in letter5.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.01,
                    delay: 1.3 + (index * 0.01),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
            <Motion
                v-for="(segment, index) in letter6.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.01,
                    delay: 1.5 + (index * 0.01),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
            <Motion
                v-for="(segment, index) in letter7.paths"
                :key="index"
                tag="path"
                :initial="{ visibility: 'hidden' }"
                :animate="draw(1)"
                :transition="{
                    duration: 0.015,
                    delay: 1.65 + (index * 0.015),
                    easing: 'linear',
                }"
                :pathLength="1"
                :d="segment.path"
                :class="segment.class"
            />
        </svg>
    </ClientOnly>
</template>

<script lang="ts" setup>
    const emits = defineEmits(["ended"]);

    const { letter1, letter2, letter3, letter4, letter5, letter6, letter7 } = useLetter();

    const playedOnce = useSessionStorage("playedOnce", false);

    const draw = (progress: number): object => ({
        strokeDashoffset: 1 - progress,
        visibility: "visible"
    });

    if (playedOnce.value) {
        emits("ended");
    } else {
        setTimeout(() => {
            emits("ended");
        }, 3000);

        setTimeout(() => {
            playedOnce.value = true;
        }, 4000);
    }
</script>

<style scoped>
	path {
        @apply fill-none stroke-current stroke-cap-round stroke-dash-1 stroke-offset-1;
	}
	.st0 {
		stroke-width: 3;
	}
	.st1 {
		stroke-width: 3.2;
	}
	.st2 {
		stroke-width: 3.5;
	}
	.st3 {
		stroke-width: 4;
	}
	.st4 {
		stroke-width: 4.2;
	}
	.st5 {
		stroke-width: 4.5;
	}
	.st6 {
		stroke-width: 4.7;
	}
	.st7 {
		stroke-width: 5;
	}
	.st8 {
		stroke-width: 6;
	}
	.st9 {
		stroke-width: 2.7;
	}
	.st10 {
		stroke-width: 2.9255;
	}
	.st11 {
		stroke-width: 3.7;
	}
	.st12 {
		stroke-width: 5.5;
	}
	.st13 {
		stroke-width: 2.5;
	}
	.st14 {
		stroke-width: 5.2;
	}
	.st15 {
		stroke-width: 8;
	}
	.st16 {
		stroke-width: 7.5;
	}
	.st17 {
		stroke-width: 7;
	}
	.st18 {
		stroke-width: 6.5;
	}
	.st19 {
		stroke-width: 6.6;
	}
	.st20 {
		stroke-width: 6.2;
	}
	.st21 {
		stroke-width: 5.7;
	}
	.st22 {
		stroke-width: 2.2;
	}
</style>

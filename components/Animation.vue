<template>
    <Motion
        ref="element"
        :key="show.toString()"
        :initial="props.initial"
        :animate="props.final"
        :transition="props.transition"
        :exit="props.initial"
        :class="show ? '' : 'invisible'"
    >
        <slot />
    </Motion>
</template>

<script lang="ts" setup>
    const props = defineProps({
        initial: Object,
        final: Object,
        transition: Object
    });

    const show = ref(false);
    const element = ref<HTMLElement | null>(null);

    useIntersection(element, () => {
        show.value = true;
    });
</script>

<template>
	<Presence>
		<Motion
			v-show="show"
			:initial="props.initial"
			:animate="props.initial"
			:transition="props.transition"
			:exit="props.final"
		>
			<slot />
		</Motion>
	</Presence>
</template>

<script lang="ts" setup>
	const props = defineProps({
		initial: Object,
		final: Object,
		transition: Object,
		state: Boolean
	});

	const show = toRef(props, "state");
</script>

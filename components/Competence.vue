<template>
	<div flex-center aspect-square bg-dark-400 :class="isMobile ? 'border-blue-400/20 border-2 rounded-md' : 'transform hover:scale-93 transition-transform duration-300 ease-out-expo'">
		<NuxtImg :src="props.item.image" max-h-20 />
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		item: Competence
	}>();

	const isMobile = useMediaQuery("(max-width: 768px)");
</script>

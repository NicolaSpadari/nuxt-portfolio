<template>
	<div v-if="splash" class="overlay" fixed inset-0 z-100 size-screen flex items-center justify-center bg-black>
		<div class="splash" w="80%" h="80%" lg="w-60%">
			<Signature @ended="handleSplash()" />
		</div>
	</div>

	<slot />
</template>

<script lang="ts" setup>
	const splash = ref(true);
	const comp = ref(null);

	const handleSplash = () => {
		comp.value.animate();

		useTimeoutFn(() => {
			splash.value = true;
		}, 1000);
	};
</script>

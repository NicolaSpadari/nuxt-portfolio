<template>
	<div class="overlay" fixed inset-0 z-100 size-screen flex items-center justify-center bg-dark-800>
		<div class="splash" w="80%" h="80%" lg="w-60%">
			<Signature @ended="handleSplash()" />
		</div>
	</div>

	<div v-show="ready">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
	const { $gsap } = useNuxtApp();
	const ready = ref(false);
	const splash = ref(true);

	const handleSplash = () => {
		splash.value = false;

		$gsap.to(".splash", {
			opacity: 0,
			scale: 0.5,
			duration: 0.7,
			delay: 0.65,
			ease: "cubic-bezier(0.22, 1, 0.36, 1)"
		});
		$gsap.to(".overlay", {
			opacity: 0,
			pointerEvents: "none",
			delay: 1
		});

		useTimeoutFn(() => {
			ready.value = true;
		}, 500);
	};
</script>

<style lang="scss">
html {
	-webkit-tap-highlight-color: transparent;
	scroll-behavior: smooth;
}
img {
	-webkit-user-drag: none;
	@apply select-none;
}

.bordered {
	text-shadow: theme("colors.dark.800") 0 0 3px;
}

.custom-scrollbar {
	scrollbar-color: theme("colors.zinc.200") initial;
	scrollbar-width: thin;

	@apply overflow-overlay;

	&::-webkit-scrollbar {
		@apply w-2 h-2;

		&-track {
			background-color: initial;
		}
		&-thumb {
			@apply bg-dark-100 transition-colors duration-500 rounded;
		}
	}
}

.page-enter-active,
.page-leave-active {
	transition: all 1s ease-in-out;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
}
</style>

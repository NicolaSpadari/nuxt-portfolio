<template>
	<Disappear
		fixed inset-0 z-100 size-screen flex items-center justify-center bg-dark-800
		:state="splash"
		:initial="initialState"
		:animate="initialState"
		:transition="transition"
		:exit="finalState"
	>
		<Disappear
			w="80%" h="80%" lg="w-60%"
			:state="splash"
			:initial="{ opacity: 1, scale: 1 }"
			:animate="{ opacity: 1, scale: 1 }"
			:transition="{ duration: 1, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' }"
			:exit="{ opacity: 0, scale: 0.5 }"
		>
			<Signature @ended="handleSplash()" />
		</Disappear>
	</Disappear>

	<div v-show="ready">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
	const ready = ref(false);
	const splash = ref(true);

	const initialState = {
		"visibility": "visible",
		"opacity": 1
	};

	const transition = {
		"duration": 0.7,
		"delay": 0.65,
		"easing": "cubic-bezier(0.22, 1, 0.36, 1)"
	};

	const finalState = {
		"visibility": "hidden",
		"opacity": 0
	};

	const handleSplash = () => {
		splash.value = false;

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

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style lang="scss">
html {
	-webkit-tap-highlight-color: transparent;
	scroll-behavior: smooth;
}
img {
	-webkit-user-drag: none;
	@apply select-none;
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

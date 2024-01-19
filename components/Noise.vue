<template>
	<div

		pointer-events-none fixed inset-0 z-50 h-screen w-screen
		after="content-empty animate-grain animate-duration-150 animate-count-infinite bg-noise w-300% h-300% -left-50% opacity-10 fixed -top-110%"
		class="after-bg-noise"
	/>
</template>

<style scoped>
    .after-bg-noise:after {
	background-image: url("@/assets/images/noise.jpg");
}
</style>

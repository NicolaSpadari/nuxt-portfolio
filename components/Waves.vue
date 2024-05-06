<template>
	<div pointer-events="none" fixed inset-x-0 z-75 uw="z-60">
		<svg viewBox="0 0 120 28">
			<path :d="wave" class="wave-1" fill-dark-800 />
			<path :d="wave" class="wave-2" fill-dark-800 fill-opacity="!35" />
			<path :d="wave" class="wave-3" fill-dark-800 fill-opacity="!20" />
		</svg>
	</div>
</template>

<script lang="ts" setup>
	const { $gsap } = useNuxtApp();
	const wave = "M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z";

	onMounted(() => {
		$gsap.set(".wave-1", { y: 0 });
		$gsap.set(".wave-2", { y: -5 });
		$gsap.set(".wave-3", { y: -10 });

		$gsap.to(".wave-1", {
			duration: 8,
			ease: "none",
			x: "-=50%",
			repeat: -1
		});
		$gsap.to(".wave-2", {
			duration: 10,
			ease: "none",
			x: "-=50%",
			repeat: -1
		});
		$gsap.to(".wave-3", {
			duration: 5,
			ease: "none",
			x: "-=50%",
			repeat: -1
		});
	});
</script>

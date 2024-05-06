<template>
	<div>
		<NuxtImg v-for="image in layers" :key="image.name" class="fragment" :src="image.name" size-full absolute :alt="image.name" />
	</div>
</template>

<script lang="ts" setup>
	const { $gsap } = useNuxtApp();

	const layers = [
		{ strength: 30, name: "/images/parallax/layer-circle.svg" },
		{ strength: 10, name: "/images/parallax/layer-bg.svg" },
		{ strength: 15, name: "/images/parallax/layer-dark-bg.svg" },
		{ strength: 30, name: "/images/parallax/layer-dots.svg" },
		{ strength: 40, name: "/images/parallax/layer-squares.svg" },
		{ strength: 20, name: "/images/parallax/layer-grass.svg" },
		{ strength: 35, name: "/images/parallax/layer-line-square.svg" },
		{ strength: 45, name: "/images/parallax/layer-person.svg" },
		{ strength: 55, name: "/images/parallax/layer-line.svg" }
	];

	onMounted(() => {
		$gsap.fromTo(".fragment", {
			yPercent: -25,
			opacity: 0
		}, {
			yPercent: 0,
			opacity: 1,
			duration: 1.25,
			delay: 2,
			stagger: 0.15
		});
	});
</script>

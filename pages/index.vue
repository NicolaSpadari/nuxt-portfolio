<template>
	<div relative z-65 h-screen overflow-hidden>
		<ClientOnly>
			<div h-full flex justify-center p-8 lg="p-16">
				<div relative my-auto w-75vw :style="imageEffect">
					<Parallax relative lg="w-screen-xs mx-auto" h-125 />
				</div>
			</div>

			<div absolute top-12 w-full flex justify-center>
				<NuxtImg src="/images/logo.png" w-10 filter-invert-100 />
			</div>
		</ClientOnly>

		<div pointer-events-none fixed overflow-hidden absolute-center-h absolute-center-v>
			<div lg="flex-row space-x-12" flex flex-col justify-center text-light-50 font-extralight tracking-widest font-heading uppercase transition-colors duration-500>
				<p text-center lg="text-left" class="animated-text">
					<span class="clamp">Nicola</span>
				</p>
				<p text-center lg="text-left" class="animated-text">
					<span class="clamp">Spadari</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "main"
	});

	const { x, y } = useMouse({ touch: false });
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const imageEffect = computed(() => ({
		transform: isDesktop.value ? `translateX(-${x.value / 50}px) translateY(${y.value / 50}px)` : "none"
	}));

	onMounted(() => {
		document.querySelectorAll(".animated-text").forEach((text, index) => {
			useGsap.fromTo(text, {
				y: index % 2 === 0 ? (isDesktop.value ? 200 : -200) : (isDesktop.value ? -200 : 200)
			}, {
				y: 0,
				delay: 1.25,
				duration: 1.5,
				ease: "power2.inOut"
			});
		});
	});
</script>

<style>
    .clamp {
		font-size: clamp(3rem, 10vw, 5rem);
	}
</style>

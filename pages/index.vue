<template>
	<div relative z-65 h-screen overflow-hidden>
		<ClientOnly>
			<div h-full flex justify-center p-8 lg="p-16">
				<div relative my-auto w-75vw :style="imageEffect">
					<Parallax relative lg="w-screen-xs mx-auto" h-125 />
				</div>
			</div>

			<div absolute top-16 w-full flex justify-center :style="titleEffect">
				<img src="@/assets/images/signature-static.svg" w-30>
			</div>
		</ClientOnly>

		<div pointer-events-none absolute inset-0 h-full w-full flex justify-center :style="textEffect">
			<div my-auto overflow-y-hidden>
				<div lg="flex-row space-x-12" bordered flex flex-col select-none justify-center text-light-50 font-extralight tracking-widest font-heading uppercase transition-colors duration-500>
					<div
						tag="p"
						:initial="{ y: width > 768 ? 200 : -200 }"
						:transition="{ delay: 1.25, duration: 1 }"
						:final="{ y: 0 }"
						text-center lg="text-left"
					>
						<span class="clamp">Nicola</span>
					</div>
					<div
						tag="p"
						:initial="{ y: width > 768 ? -200 : 200 }"
						:transition="{ delay: 1.25, duration: 1 }"
						:final="{ y: 0 }"
						text-center lg="text-left"
					>
						<span class="clamp">Spadari</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { width } = useWindowSize();
	const { x, y } = useMouse({ touch: false });

	const textEffect = computed(() => ({
		transform: width.value > 768 ? `translateX(${x.value / 45}px) translateY(-${y.value / 45}px)` : "none"
	}));

	const titleEffect = computed(() => ({
		transform: width.value > 768 ? `translateX(${x.value / 100}px) translateY(-${y.value / 100}px)` : "none"
	}));

	const imageEffect = computed(() => ({
		transform: width.value > 768 ? `translateX(-${x.value / 50}px) translateY(${y.value / 50}px)` : "none"
	}));
</script>

<style>
    .clamp {
		font-size: clamp(3rem, 8vw, 10rem);
	}
</style>

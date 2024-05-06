<template>
	<div size-screen flex-center bg-dark-200>
		<div crate>
			<div flex gap-4>
				<div class="cube">
					<p class="up">
						I
					</p>
					<p class="middle">
						I
					</p>
				</div>
				<div class="cube">
					<p class="up">
						make
					</p>
					<p class="middle">
						make
					</p>
				</div>
				<div class="cube">
					<p class="up">
						websites
					</p>
					<p class="middle">
						websites
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "test"
	});

	const tl = useGsap.timeline();

	onMounted(() => {
		useGsap.set(".middle", { yPercent: -100, rotationX: -90, opacity: 0, transformOrigin: "50% 50% -50" });
		tl.to(".cube .up", {
			rotationX: 90,
			transformOrigin: "50% 50% -50",
			opacity: 0,
			stagger: {
				ease: "power2",
				from: "start"
			}
		});
		tl.to(".cube .middle", {
			rotationX: 0,
			opacity: 1,
			transformOrigin: "50% 50% -50",
			stagger: {
				ease: "power2",
				from: "start"
			}
		});
	});
</script>

<style scoped>
	.cube p{
		@apply text-100px;
		perspective: 600px;
	}
</style>

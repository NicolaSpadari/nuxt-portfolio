<template>
	<div fixed inset-0 z-110 class="wrapper">
		<svg class="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
			<path class="bubble" fill-dark-800 stroke-dark-800 stroke-width="2px" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
		</svg>
	</div>
</template>

<script lang="ts" setup>
	const tl = useGsap.timeline({ paused: true });

	onMounted(() => {
		tl.to(".bubble", {
			attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
			ease: "power2.in",
			duration: 0.8
		});
		tl.to(".bubble", {
			attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
			ease: "power2.out",
			duration: 0.4
		});
	});
	const animate = () => {
		tl.play();
	};
	defineExpose({
		animate
	});
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.wrapper > .transition {
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
}
</style>

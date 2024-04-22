<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.3 179.2" size-full text-gray-50>
		<g v-for="letter in letters" :key="letter.letter" class="letter">
			<path
				v-for="(segment, index) in letter.paths"
				:key="index"
				:d="segment.path"
				class="path"
				:class="segment.class"
			/>
		</g>
	</svg>
</template>

<script lang="ts" setup>
	const emit = defineEmits(["ended"]);

	const { $gsap } = useNuxtApp();
	const letters = useSignature();
	const playedOnce = useSessionStorage("playedOnce", false);

	const tl = $gsap.timeline();

	onMounted(() => {
		if (playedOnce) {
			emit("ended");
		} else {
			const paths = document.querySelectorAll(".path");

			paths.forEach((path) => {
				tl.fromTo(path, {
					strokeDasharray: 100,
					strokeDashoffset: 100
				}, {
					strokeDasharray: 0,
					strokeDashoffset: 0,
					duration: 0.01
				});
			});

			useTimeoutFn(() => {
				playedOnce.value = true;
				emit("ended");
			}, 2000);
		}
	});
</script>

<style scoped>
path {
	@apply fill-none stroke-current stroke-cap-round;
}
.st0 {
	stroke-width: 3;
}
.st1 {
	stroke-width: 3.2;
}
.st2 {
	stroke-width: 3.5;
}
.st3 {
	stroke-width: 4;
}
.st4 {
	stroke-width: 4.2;
}
.st5 {
	stroke-width: 4.5;
}
.st6 {
	stroke-width: 4.7;
}
.st7 {
	stroke-width: 5;
}
.st8 {
	stroke-width: 6;
}
.st9 {
	stroke-width: 2.7;
}
.st10 {
	stroke-width: 2.9255;
}
.st11 {
	stroke-width: 3.7;
}
.st12 {
	stroke-width: 5.5;
}
.st13 {
	stroke-width: 2.5;
}
.st14 {
	stroke-width: 5.2;
}
.st15 {
	stroke-width: 8;
}
.st16 {
	stroke-width: 7.5;
}
.st17 {
	stroke-width: 7;
}
.st18 {
	stroke-width: 6.5;
}
.st19 {
	stroke-width: 6.6;
}
.st20 {
	stroke-width: 6.2;
}
.st21 {
	stroke-width: 5.7;
}
.st22 {
	stroke-width: 2.2;
}
</style>

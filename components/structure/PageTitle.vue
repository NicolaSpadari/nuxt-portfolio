<template>
	<p class="glitch" :data-text="props.msg ? props.msg : routeName">
		<span class="title">
			{{ props.msg ? props.msg : routeName }}
		</span>
	</p>
</template>

<script lang="ts" setup>
	const props = defineProps({
		msg: {
			type: String,
			required: false
		}
	});

	const { $gsap } = useNuxtApp();
	const route = useRoute();
	const routeName = unref(route.name);

	onMounted(() => {
		$gsap.fromTo(".title", {
			opacity: 0,
			y: -200
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 3,
			ease: "power3.inOut"
		});
	});
</script>

<style lang="scss" scoped>
.glitch {
	transform: scaleX(var(--scale, 1));
	animation: glitch-p 7.5s infinite alternate;
	@apply text-teal-300 fixed text-3xl lg:text-7xl select-none top-5 lg:top-8 z-10 font-heading uppercase font-bold;

	&:before,
	&:after {
		--top: 0;
		--left: 0;
		--v-height: 30%;
		--n-tenth: calc(15 * 0.1 * var(--top));
		--t-cut: calc(var(--n-tenth) / 15 * 100%);
		--b-cut: calc(var(--t-cut) + var(--v-height));
		content: attr(data-text);

		@apply absolute w-full left-0 text-center opacity-80;

		transform: translateX(calc(var(--left) * 100%));
		filter: drop-shadow(0 0 transparent);
		text-shadow:
			calc(var(--left) * -3em) 0 0.02em theme("colors.green.400"),
			calc(var(--left) * -6em) 0 0.02em theme("colors.fuchsia.500");
		clip-path: polygon(
			0% var(--t-cut),
			100% var(--t-cut),
			100% var(--b-cut),
			0% var(--b-cut)
		);
	}

	&:before {
		animation: glitch-b 1.5s infinite alternate-reverse;
	}

	&:after {
		animation: glitch-a 0.75s infinite alternate;
	}
}

@keyframes glitch-p {
	17% {
		--scale: 0.87;
	}
	31% {
		--scale: 1.1;
	}
	37% {
		--scale: 1.3;
	}
	47% {
		--scale: 0.91;
	}
	87% {
		--scale: 1;
	}
}

@keyframes glitch-a {
	10%,
	30%,
	50%,
	70%,
	90% {
		--top: 0;
		--left: 0;
	}
	0% {
		--v-height: 15%;
	}
	20% {
		--left: 0.005;
	}
	40% {
		--left: 0.01;
		--v-height: 20%;
		--top: 3;
	}
	60% {
		--left: 0.03;
		--v-height: 25%;
		--top: 6;
	}
	80% {
		--left: 0.07;
		--v-height: 5%;
		--top: 8;
	}
	100% {
		--left: 0.083;
		--v-height: 30%;
		--top: 1;
	}
}

@keyframes glitch-b {
	10%,
	30%,
	50%,
	70%,
	90% {
		--top: 0;
		--left: 0;
	}
	0% {
		--v-height: 15%;
		--top: 10;
	}
	20% {
		--left: -0.005;
	}
	40% {
		--left: -0.01;
		--v-height: 17%;
		--top: 3;
	}
	60% {
		--left: -0.03;
		--v-height: 35%;
		--top: 6;
	}
	80% {
		--left: -0.07;
		--v-height: 5%;
		--top: 8;
	}
	100% {
		--left: -0.083;
		--v-height: 30%;
		--top: 1;
	}
}
</style>

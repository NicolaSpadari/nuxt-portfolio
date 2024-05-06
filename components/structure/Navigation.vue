<template>
	<div>
		<div class="corner corner-1" fixed left-8 top-8 z-80 lg="left-12 top-12">
			<NuxtLink to="/projects" glow text-sm tracking-wider font-heading uppercase>
				Projects
			</NuxtLink>
		</div>

		<div class="corner corner-2" fixed right-8 top-8 z-80 lg="right-12 top-12">
			<NuxtLink to="/about" glow text-sm tracking-wider font-heading uppercase>
				About
			</NuxtLink>
		</div>

		<div v-if="$route.path !== '/'" fixed bottom-8 z-80 absolute-center-h lg="bottom-12">
			<NuxtLink to="/">
				<NuxtImg src="/images/signature-static.svg" hover="opacity-70" w-25 transition-opacity duration-500 />
			</NuxtLink>
		</div>

		<div class="corner corner-3" fixed bottom-8 left-8 z-80 lg="left-12 bottom-12">
			<NuxtLink to="https://github.com/NicolaSpadari" :external="true" glow text-sm tracking-wider font-heading uppercase target="_blank">
				GitHub
			</NuxtLink>
		</div>

		<div class="corner corner-4" fixed bottom-8 right-8 z-80 lg="right-12 bottom-12">
			<NuxtLink to="https://www.linkedin.com/in/nicolaspadari" :external="true" glow text-sm tracking-wider font-heading uppercase target="_blank">
				LinkedIn
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const commonSettings = {
		translateX: 0,
		translateY: 0,
		duration: 1.5,
		opacity: 1,
		delay: 1.5
	};

	onMounted(() => {
		useGsap.set(".corner", { opacity: 0 });

		useGsap.set(".corner-1", {
			translateX: -100,
			translateY: -100
		});

		useGsap.set(".corner-2", {
			translateX: 100,
			translateY: -100
		});

		useGsap.set(".corner-3", {
			translateX: -100,
			translateY: 100
		});

		useGsap.set(".corner-4", {
			translateX: 100,
			translateY: 100
		});

		useGsap.to(".corner", commonSettings);
	});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
	@apply invisible pointer-events-none;
}

[glow] {
	border-image: radial-gradient(
			theme("colors.teal.300"),
			theme("colors.green.400")
		)
		15;
	transition: 0.5s;

	@apply text-light-50 relative inline-block border-solid;

	&:before {
		background-image: linear-gradient(
			90deg,
			theme("colors.teal.300"),
			theme("colors.green.400")
		);
		@apply rounded-bl-3px rounded-tl-3px left-0;
	}

	&:after {
		background-image: linear-gradient(
			270deg,
			theme("colors.teal.300"),
			theme("colors.green.400")
		);
		@apply rounded-br-3px rounded-tr-3px right-0;
	}

	&:before,
	&:after {
		transition: 0.4s;

		@apply content-empty bottom--3px block h-3px opacity-0 absolute w-12px z--1:;
	}

	&:hover {
		transform: scale(1.05);
		animation: glow 1.5s ease-in-out infinite alternate;

		&:before,
		&:after {
			@apply w-1/2 opacity-100;
		}
	}
}

@keyframes glow {
	0% {
		filter: drop-shadow(0 0 2px theme("colors.teal.300"));
	}
	to {
		filter: drop-shadow(0 1px 8px theme("colors.green.300"));
	}
}
</style>

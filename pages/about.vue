<template>
	<div>
		<StructurePageTitle right-8 />

		<div class="floating">
			<p text="2.5rem" lg="text-8xl pl-0" xxl="text-10rem" pl-3 text-light-50 font-bold uppercase>
				I'm a frontend
			</p>
			<p text="2.5rem" lg="text-8xl pl-0" xxl="text-10rem" pl-3 text-light-50 font-bold uppercase>
				engineer
			</p>
		</div>

		<div class="arrow" absolute>
			<NuxtImg src="/images/arrow.svg" h-15 lg="h-32" animate-bounce />
		</div>

		<div crate>
			<div grid grid-cols-1 lg="grid-cols-2" mt-60>
				<Experiences />
				<div hidden lg="block">
					<div h-full flex lg="justify-center">
						<p lg="text-5xl" mt-5 text-right text-5xl text-light-50 font-heading>
							Experiences
						</p>
					</div>
				</div>
			</div>
			<div class="demo competences" lg="px-0" relative mb-70 mt-30 px-3 uw="z-80">
				<div lg="mb-12">
					<p lg="text-5xl mb-0" mb-5 mb-7 text-3xl text-light-50 font-heading>
						What I use
					</p>
				</div>
				<div grid grid-cols-2 md="grid-cols-4" lg="grid-cols-5" xl="grid-cols-6" gap-4>
					<div v-for="item in competences" :key="item.id" class="competence">
						<Competence :item="item" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { $gsap } = useNuxtApp();
	const { data: competences } = await useFetch("/api/competences", {
		headers: useRequestHeaders(["cookie"]) as Record<string, string>,
		lazy: true
	});

	onMounted(() => {
		$gsap.set(".floating", { y: 200 });
		$gsap.set(".arrow", { y: 300 });

		$gsap.timeline({
			scrollTrigger: {
				trigger: ".view",
				start: "top top",
				end: "+=2000",
				scrub: 0.75,
				pin: ".floating"
			}
		}).fromTo(".floating", {
			x: window.innerWidth / 4
		}, {
			x: 50
		});

		$gsap.timeline({
			scrollTrigger: {
				trigger: ".view",
				start: "top top",
				scrub: 0.75,
				pin: ".arrow",
			}
		}).from(".arrow", {
			xPercent: 90
		});

		$gsap.fromTo(".competence", {
			opacity: 0,
			scale: 0.65
		}, {
			scrollTrigger: {
				trigger: ".demo",
				start: "top center"
			},
			opacity: 1,
			scale: 1,
			stagger: {
				from: "center",
				grid: "auto",
				amount: 0.25
			}
		});
	});

	useHead({
		meta: [
			{ name: "description", content: "My competences and work experiences" }
		]
	});
</script>

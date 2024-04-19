<template>
	<div mb-10 overflow-hidden>
		<div row-gap-10 grid px-4 py-5>
			<template v-for="(experience, index) in experiences" :key="`experience-${index}`">
				<div
					:initial="{ opacity: 0, y: 25 }"
					:transition="{ duration: 1, delay: 0.75, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }"
					:final="{ opacity: 1, y: 0 }"
					flex
				>
					<div mr-4 flex flex-col items-center>
						<div v-if="experience.current" relative m-4 rounded-full transition-all duration-300>
							<div absolute h-6 w-6 animate-ping rounded-full bg-emerald-200 />
							<div h-6 w-6 rounded-full bg-emerald-200 />
						</div>
						<template v-else>
							<div m-4 rounded-full transition-all duration-300>
								<div h-6 w-6 rounded-full bg-blue-400 />
							</div>
							<div h-full w-px bg-gray-400 />
						</template>
					</div>
					<div w-full pb-10 pt-2>
						<div flex>
							<p text-light-50 font-medium leading-6>
								{{ experience.name }}
							</p>
							<p ml-auto text-slate-400 leading-6 tracking-wider font-heading>
								{{ formatDate(experience.date) }}
								<template v-if="experience.current">
									- Today
								</template>
							</p>
						</div>
						<p v-for="(exp, expIndex) in experience.details" :key="expIndex" mt-2 text-sm text-gray-400>
							{{ exp }}
						</p>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { data: experiences } = await useFetch("/api/experiences", {
		headers: useRequestHeaders(["cookie"]) as Record<string, string>
	});

	const formatDate = (date: string) => {
		const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
		const year = new Date(date).getFullYear();

		return `${month}/${year}`;
	};
</script>

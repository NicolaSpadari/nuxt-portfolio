<template>
	<div ref="comp" relative aspect-square bg-dark-400 :class="isMobile ? 'border-blue-400/20 border-2 rounded-md' : 'cursor-pointer transform hover:scale-93 transition-transform duration-300 ease-out-expo'">
		<Presence>
			<Motion
				:key="String(props.active)"
				absolute h-full w-full flex items-center justify-center
				:initial="{ opacity: 0, scale: 0.85 }"
				:animate="{ opacity: 1, scale: 1, transition: { delay: 0.1 } }"
				:exit="{ opacity: 0, scale: 0.85 }"
			>
				<img v-if="!props.active" :src="props.item.image" max-h-20>
				<div v-else size-full p-7 divide-y-3 divide-light-50>
					<div mb-3 flex items-center space-x-2>
						<!-- <p mb-3 text-6xl text-light-50 font-extralight font-heading>
							{{ position }}
						</p> -->
						<img :src="props.item.image" w-8 :alt="props.item.title">
					</div>
					<div pt-7>
						<p mb-3 text-2xl text-light-50 font-bold>
							{{ props.item.title }}
						</p>
						<p text-light-50 hidden uw="block">
							{{ props.item.description }}
						</p>
					</div>
				</div>
			</Motion>
		</Presence>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		item: Competence
		index: number
		active: boolean
	}>();

	const emits = defineEmits(["activated"]);
	const comp = ref<HTMLElement>();
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { isOutside } = useMouseInElement(comp);

	const setActive = (item: Competence | null) => {
		if (!isMobile.value) {
			emits("activated", item);
		}
	};

	watch(isOutside, (outside) => {
		!outside ? setActive(props.item) : setActive(null);
	});

	const position = String(1 + props.index).padStart(2, "0");
</script>

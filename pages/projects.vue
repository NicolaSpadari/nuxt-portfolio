<template>
	<div>
		<StructurePageTitle left-8 />

		<div h-screen flex items-center overflow-y-hidden>
			<Swiper
				:breakpoints="breakpoints"
				:direction="width > 768 ? 'horizontal' : 'vertical'"
				:scrollbar="{
					draggable: true,
					verticalClass: 'hidden',
					dragClass: 'swiper-scrollbar-drag',
					horizontalClass: 'swiper-scrollbar-horizontal',
				}"
				:modules="[SwiperMousewheel, SwiperScrollbar]"
				:mousewheel="true"
				:height="500"
				:width="width"
				md="h-auto" z-30 h-90vh uw="z-80"
			>
				<SwiperSlide v-for="item in projects" :key="item.id">
					<ProjectCard :item="item" />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { "data": projects } = await useFetch("/api/projects", {
		"headers": useRequestHeaders(["cookie"]) as Record<string, string>
	});

	const { width } = useWindowSize();

	const breakpoints = {
		"320": {
			"slidesPerView": 1,
			"spaceBetween": 40
		},
		"768": {
			"slidesPerView": 2,
			"spaceBetween": 50
		},
		"992": {
			"slidesPerView": 3,
			"spaceBetween": 60
		},
		"1200": {
			"slidesPerView": 3.3,
			"spaceBetween": 70
		},
		"1400": {
			"slidesPerView": 4.2,
			"spaceBetween": 60
		}
	};

	useHead({
		"meta": [
			{ "name": "description", "content": "A list of projects I worked on" }
		]
	});
</script>

<style>
    .swiper-scrollbar-horizontal {
	@apply w-3/4! absolute-center-h! bottom-unset! top-0!;
}
.swiper-scrollbar-drag {
	@apply grab;
}
</style>

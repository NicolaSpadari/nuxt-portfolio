<template>
	<section pt="200px">
		<div crate>
			<div w-full class="main-slider">
				<Swiper
					:loop="true"
					:navigation="{
						prevEl: '.btn-prev',
						nextEl: '.btn-next',
					}"
					slides-per-view="auto"
					:modules="[SwiperNavigation]"
					@swiper="setMainSwiper"
					@slide-change="onMainSliderUpdate()"
				>
					<SwiperSlide v-for="item in projects" :key="item.id">
						<div relative w-full flex-center>
							<span class="before" top="150px" absolute w-full text-center text-transparent font-bold font-heading capitalize>
								{{ item.title }}
							</span>
							<figure w="800px" h="500px" relative z-9 m-auto overflow-hidden>
								<NuxtImg class="preview" :src="item.image" size-full object-cover :alt="item.title" />
							</figure>
							<span class="after" top="150px" absolute z-9 w-full text-center text-transparent font-bold font-heading capitalize text-stroke-2 text-stroke-white>
								{{ item.title }}
							</span>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div my="100px" flex justify-between>
				<div w="1/2" text-white text="14px">
					<span block>{{ currentIndex }}/{{ totalSlides }}</span>
					<div w-full class="info-slider">
						<Swiper
							:loop="true"
							effect="fade"
							:fade-effect="{
								crossFade: true,
							}"
							:navigation="{
								prevEl: '.btn-prev',
								nextEl: '.btn-next',
							}"
							:modules="[SwiperNavigation]"
							@swiper="setInfoSwiper"
							@slide-change="onInfoSliderUpdate()"
						>
							<SwiperSlide v-for="item in projects" :key="`info-${item.id}`">
								<div class="about" mt-5 flex flex-col gap-2>
									<span class="name">{{ item.title }}</span>
									<span class="description">{{ item.description }}</span>
									<NuxtLink class="link" :to="item.link" underline>
										See more
									</NuxtLink>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>

				<div flex items-center gap-5>
					<button w="50px" h="50px" transform-scale position-unset flex-center cursor-pointer border-2 border-white rounded-full bg-none transition-all duration-300 class="swiper-button-prev btn-prev" hover="scale-110 border-white/70">
						<i-heroicons-solid-chevron-left h-7 w-7 text-white />
					</button>
					<button w="50px" h="50px" transform-scale position-unset flex-center cursor-pointer border-2 border-white rounded-full bg-none transition-all duration-300 class="swiper-button-next btn-next" hover="scale-110 border-white/70">
						<i-heroicons-solid-chevron-right h-7 w-7 text-white />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import type { Swiper as SwiperInstance } from "swiper/types";

	const { $gsap } = useNuxtApp();

	const mainSlider = ref<SwiperInstance | null>(null);
	const infoSlider = ref<SwiperInstance | null>(null);

	const currentIndex = ref(0);
	const totalSlides = ref(0);
	const activeSlide = ref<HTMLElement | null>(null);

	const { data: projects } = await useFetch("/api/projects", {
		headers: useRequestHeaders(["cookie"]) as Record<string, string>
	});

	const updateCustomPagination = (instance: SwiperInstance) => {
		currentIndex.value = instance.realIndex + 1;
		totalSlides.value = instance.slides.length;
	};

	const setMainSwiper = (instance: SwiperInstance) => {
		mainSlider.value = instance;
		updateCustomPagination(mainSlider.value);
	};
	const setInfoSwiper = (instance: SwiperInstance) => {
		infoSlider.value = instance;
	};

	const onMainSliderUpdate = () => {
		const animateElements = (elements: NodeListOf<Element>, options: GSAPTweenVars) => {
			elements.forEach((element) => {
				$gsap.from(element, options);
			});
		};

		activeSlide.value = mainSlider.value!.slides[mainSlider.value!.activeIndex];

		const largeTextBefore = activeSlide.value.querySelectorAll(".before");
		const largeTextAfter = activeSlide.value.querySelectorAll(".after");
		const images = activeSlide.value.querySelectorAll(".preview");

		const commonAnimationOptions = {
			x: 100,
			opacity: 0,
			duration: 0.85,
			ease: "power2.inOut"
		};

		animateElements(largeTextBefore!, commonAnimationOptions);
		animateElements(largeTextAfter!, commonAnimationOptions);

		images?.forEach((image) => {
			$gsap.from(image, {
				scale: 1.2,
				duration: 0.85,
				ease: "power2.inOut"
			});
		});

		updateCustomPagination(mainSlider.value!);
	};

	const onInfoSliderUpdate = () => {
		const animateTimelineElements = (timeline: GSAPTimeline, elements: NodeListOf<Element>, options: GSAPTweenVars) => {
			elements.forEach((element) => {
				timeline.from(element, options, "<= 0.2");
			});
		};

		const activeIndex = infoSlider.value!.activeIndex;
		const activeSlide = document.querySelector(`.info-slider .swiper-slide:nth-child(${activeIndex + 1})`);

		const name = activeSlide?.querySelectorAll(".about .name");
		const description = activeSlide?.querySelectorAll(".about .description");
		const link = activeSlide?.querySelectorAll(".about .link");

		const commonAnimationOptions = {
			x: 10,
			opacity: 0,
			duration: 0.85,
			ease: "power2.inOut"
		};

		const tl = $gsap.timeline();

		animateTimelineElements(tl, name!, commonAnimationOptions);
		animateTimelineElements(tl, description!, commonAnimationOptions);
		animateTimelineElements(tl, link!, commonAnimationOptions);
	};
</script>

<style lang="scss" scoped>
	.swiper-button-prev,
	.swiper-button-next{
		&:before,
		&:after{
			content: unset;
		}
	}

	.before,
	.after{
		font-size: clamp(1rem, 100vw, 10rem);
	}
</style>

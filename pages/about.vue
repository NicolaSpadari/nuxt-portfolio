<template>
    <div>
        <StructurePageTitle right-8 />

        <div ref="element" h-screen max-w-screen class="custom-scrollbar" overflow-y-scroll>
            <div min-h-150vh overflow-x-hidden>
                <div crate mt-40 lg="mt-60" uw="mt-80">
                    <div pointer-events-none :style="isMobile ? '' : pStyle">
                        <div overflow-hidden :style="firstTextEffect">
                            <Animation
                                tag="p"
                                :initial="{ opacity: 0, y: 100 }"
                                :transition="{ duration: 1, delay: 0.75, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }"
                                :final="{ opacity: 1, y: 0 }"
                                text-light-50 transition-colors duration-500 text="2.5rem" lg="text-8xl pl-0" xxl="text-10rem" font-bold uppercase pl-3
                            >
                                I'm a frontend
                            </Animation>
                        </div>
                        <div overflow-hidden :style="secondTextEffect">
                            <Animation
                                tag="p"
                                :initial="{ opacity: 0, y: 100 }"
                                :transition="{ duration: 1, delay: 1, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }"
                                :final="{ opacity: 1, y: 0 }"
                                text-light-50 transition-colors duration-500 text="2.5rem" lg="text-8xl pl-0" xxl="text-10rem" font-bold uppercase pl-3
                            >
                                engineer
                            </Animation>
                        </div>
                    </div>

                    <div :style="isMobile ? '' : mobilePStyle">
                        <Animation
                            :initial="{ opacity: 0 }"
                            :transition="{ duration: 1, delay: 1.5, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }"
                            :final="{ opacity: 1 }"
                            max-w-5xl flex justify-center lg="justify-end mt-0" xl="max-w-full" animate-bounce mt-20
                        >
                            <img src="@/assets/images/arrow.svg" h-15 lg="h-32">
                        </Animation>
                    </div>

                    <div grid grid-cols-1 mt-15vh lg="grid-cols-2 mt-80vh">
                        <Experiences />
                        <div hidden lg="block">
                            <div flex h-full lg="justify-center">
                                <p text-light-50 text-right font-heading text-5xl lg="text-5xl" mt-5>
                                    Experiences
                                </p>
                            </div>
                        </div>
                    </div>
                    <div px-3 mt-30 mb-70 lg="px-0" relative uw="z-80">
                        <div lg="mb-12">
                            <p text-light-50 font-heading text-3xl mb-7 lg="text-5xl mb-0" mb-5>
                                What I use
                            </p>
                        </div>
                        <div grid grid-cols-2 md="grid-cols-4" lg="grid-cols-6" gap-4>
                            <div v-for="(item, index) in competences" :key="item.id">
                                <Competence :item="item" :index="index" :active="activeCompetence === item" @activated="setActive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { data: competences } = await useFetch("/api/competences", {
        headers: useRequestHeaders(["cookie"]) as Record<string, string>
    });

    const element = ref<any>(null);
    const activeCompetence = ref<Competence | null>(null);
    const { y: height } = useScroll(element);
    const arrived = ref(false);
    const position = ref(400);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const { x, y } = useMouse({ touch: false });

    if (isMobile.value) {
        position.value = 75;
    }

    const mobilePStyle = computed(() => ({
        transform: `translateY(${arrived.value ? 400 : height.value}px)`
    }));

    const pStyle = computed(() => ({
        transform: `translateX(${arrived.value ? 100 : height.value * 0.25}px) translateY(${arrived.value ? 400 : height.value}px)`
    }));

    const firstTextEffect = computed(() => ({
        transform: `translateX(${x.value / 55}px) translateY(-${y.value / 55}px)`
    }));

    const secondTextEffect = computed(() => ({
        transform: `translateX(${x.value / 70}px) translateY(-${y.value / 70}px)`
    }));

    watch(height, (val) => {
        val > position.value ? arrived.value = true : arrived.value = false;
    });

    const setActive = (item: Competence): void => {
        if (item === activeCompetence.value) {
            activeCompetence.value = null;
        } else {
            activeCompetence.value = item;
        }
    };

    useHead({
        meta: [
            { name: "description", content: "My competences and work experiences" }
        ]
    });
</script>

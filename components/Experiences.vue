<template>
    <div overflow-hidden mb-10>
        <div grid row-gap-10 px-4 py-5>
            <template v-for="(experience, index) in experiences" :key="`experience-${index}`">
                <Animation
                    :initial="{ opacity: 0, y: 25 }"
                    :transition="{ duration: 1, delay: 0.75, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }"
                    :final="{ opacity: 1, y: 0 }"
                    flex
                >
                    <div flex flex-col items-center mr-4>
                        <div v-if="experience.current" relative transition-all duration-300 rounded-full m-4>
                            <div w-6 h-6 bg-emerald-200 rounded-full absolute animate-ping />
                            <div w-6 h-6 bg-emerald-200 rounded-full />
                        </div>
                        <template v-else>
                            <div transition-all duration-300 rounded-full m-4>
                                <div w-6 h-6 bg-blue-400 rounded-full />
                            </div>
                            <div w-px h-full bg-gray-400 />
                        </template>
                    </div>
                    <div w-full pt-2 pb-10>
                        <div flex>
                            <p text-light-50 leading-6 font-medium>
                                {{ experience.name }}
                            </p>
                            <p leading-6 font-heading text-slate-400 ml-auto tracking-wider>
                                {{ formatDate(experience.date) }}
                                <template v-if="experience.current">
                                    - Today
                                </template>
                            </p>
                        </div>
                        <p v-for="(exp, index) in experience.details" :key="index" text-gray-400 text-sm mt-2>
                            {{ exp }}
                        </p>
                    </div>
                </Animation>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { data: experiences } = await useFetch("/api/experiences");

    const formatDate = (date: string) => {
        const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
        const year = new Date(date).getFullYear();

        return `${month}/${year}`;
    };
</script>

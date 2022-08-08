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
                        <div transition-all duration-300 rounded-full m-4>
                            <div w-6 h-6 bg-blue-400 rounded-full />
                        </div>
                        <div w-px h-full bg-gray-400 />
                    </div>
                    <div w-full pt-2 pb-10>
                        <div flex>
                            <p text-light-50 leading-6 font-medium>
                                {{ experience.title }}
                            </p>
                            <p leading-6 font-heading text-slate-400 ml-auto tracking-wider>
                                {{ experience.date }}
                            </p>
                        </div>
                        <p v-for="(detail, dIndex) in experience.details" :key="`detail-${dIndex}`" text-gray-400 text-sm mt-2>
                            {{ detail }}
                        </p>
                    </div>
                </Animation>
            </template>

            <Animation
                :initial="{ opacity: 0, y: 25 }"
                :transition="{ duration: 1, delay: 0.75, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }"
                :final="{ opacity: 1, y: 0 }"
                flex align-middle
            >
                <div flex flex-col items-center mr-4>
                    <div relative transition-all duration-300 rounded-full m-4>
                        <div w-6 h-6 bg-emerald-200 rounded-full absolute animate-ping />
                        <div w-6 h-6 bg-emerald-200 rounded-full />
                    </div>
                </div>
                <div w-full pt-2>
                    <div flex>
                        <p text-light-50 leading-6 font-medium>
                            In progress
                        </p>
                        <p leading-6 font-heading text-gray-400 ml-auto>
                            Today
                        </p>
                    </div>
                    <p text-gray-400 text-sm mt-2>
                        Working at Suggesto
                    </p>
                    <p text-gray-400 text-sm mt-2>
                        I like to play with modern technologies such as Nuxt, Vite, Tailwind, Firebase, Supabase. Strapi, Netlify
                    </p>
                </div>
            </Animation>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const experiences = [
        {
            title: "Diploma as computer technician",
            date: "07/2017",
            details: [
                "At ITT Michelangelo Buonarroti - Pozzo, Trento (Italia)"
            ]
        },
        {
            title: "Work experience in Wolverhampton",
            date: "09/2017",
            details: [
                "Internship organized by the province of Trento, lasted 3 months",
                "Developing of website and small custom admin panel for Starworks Warehouse, made with Bootstrap"
            ]
        },
        {
            title: "Frontend Engineer at Suggesto",
            date: "04/2018",
            details: [
                "Career start as frontend engineer",
                "Using techologies like Liferay and Vue, creating tourism oriented portals"
            ]
        }
    ];
</script>

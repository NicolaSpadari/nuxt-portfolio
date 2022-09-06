<template>
    <div>
        <div fixed z-50 left-8 top-8 lg="left-16 top-16">
            <Animation
                v-if="$route.path === '/'"
                :initial="{ opacity: 0, y: -100, x: -100 }"
                :transition="transition"
                :final="{ opacity: 1, y: 0, x: 0 }"
            >
                <NuxtLink to="/projects" glow text-sm uppercase font-heading tracking-wider>
                    Projects
                </NuxtLink>
            </Animation>
            <NuxtLink v-else to="/projects" glow text-sm uppercase font-heading tracking-wider>
                Projects
            </NuxtLink>
        </div>

        <div fixed z-50 right-8 top-8 lg="right-16 top-16">
            <Animation
                v-if="$route.path === '/'"
                :initial="{ opacity: 0, y: -100, x: 100 }"
                :transition="transition"
                :final="{ opacity: 1, y: 0, x: 0 }"
            >
                <NuxtLink to="/about" glow text-sm uppercase font-heading tracking-wider>
                    About
                </NuxtLink>
            </Animation>
            <NuxtLink v-else to="/about" glow text-sm uppercase font-heading tracking-wider>
                About
            </NuxtLink>
        </div>

        <div fixed z-50 absolute-center-h bottom-8 lg="bottom-16">
            <Presence>
                <Motion
                    v-if="$route.path !== '/'"
                    :initial="{ y: 100, opacity: 0 }"
                    :animate="{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }"
                    :exit="{ opacity: 0 }"
                >
                    <NuxtLink to="/">
                        <img src="assets/images/signature-static.svg" transition-opacity duration-500 hover="opacity-70" w-25>
                    </NuxtLink>
                </Motion>
            </Presence>
        </div>

        <div fixed z-50 left-8 bottom-8 lg="left-16 bottom-16">
            <Animation
                v-if="$route.path === '/'"
                :initial="{ opacity: 0, y: -100, x: -100 }"
                :transition="transition"
                :final="{ opacity: 1, y: 0, x: 0 }"
            >
                <NuxtLink to="https://github.com/NicolaSpadari" glow text-sm uppercase font-heading tracking-wider>
                    GitHub
                </NuxtLink>
            </Animation>
            <NuxtLink v-else to="https://github.com/NicolaSpadari" glow text-sm uppercase font-heading tracking-wider>
                GitHub
            </NuxtLink>
        </div>

        <div fixed z-50 right-8 bottom-8 lg="right-16 bottom-16">
            <Animation
                v-if="$route.path === '/'"
                :initial="{ opacity: 0, y: -100, x: 100 }"
                :transition="transition"
                :final="{ opacity: 1, y: 0, x: 0 }"
            >
                <NuxtLink to="https://www.linkedin.com/in/nicolaspadari" glow text-sm uppercase font-heading tracking-wider>
                    LinkedIn
                </NuxtLink>
            </Animation>
            <NuxtLink v-else to="https://www.linkedin.com/in/nicolaspadari" glow text-sm uppercase font-heading tracking-wider>
                LinkedIn
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const transition = {
        duration: 1.5,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)"
    };
</script>

<style lang="scss" scoped>
    .router-link-exact-active{
        @apply invisible pointer-events-none;
    }

    [glow]{
        border-image: radial-gradient(theme("colors.teal.300"), theme("colors.green.400")) 15;
        transition: .2s;

        @apply text-light-50 relative inline-block border-solid;

        &:before{
            background-image: linear-gradient(90deg, theme("colors.teal.300"), theme("colors.green.400"));
            @apply rounded-bl-3px rounded-tl-3px left-0;
        }

        &:after{
            background-image: linear-gradient(270deg, theme("colors.teal.300"), theme("colors.green.400"));
            @apply rounded-br-3px rounded-tr-3px right-0;
        }

        &:before,
        &:after{
            transition: .4s;

            @apply content-empty bottom--3px block h-3px opacity-0 absolute w-12px z--1:
        }

        &:hover{
            transform: skew(-5deg);
            animation: glow 1.5s ease-in-out infinite alternate;

            &:before,
            &:after{
                @apply w-1/2 opacity-100;
            }
        }
    }

    @keyframes glow{
        0% {
            filter: drop-shadow(0 0 2px theme("colors.teal.300"))
        }
        to {
            filter: drop-shadow(0 1px 8px theme("colors.green.300"))
        }
    }
</style>

<template>
    <div
        h-screen
        w-screen
        inset-0
        pointer-events-none
        fixed
        z-50
        after="content-empty animate-grain animate-duration-150 animate-count-infinite bg-noise w-300% h-300% -left-50% opacity-10 fixed -top-110%"
        class="after-bg-noise"
    />
</template>

<style scoped>
    .after-bg-noise:after{
        background-image: url("@/assets/images/noise.jpg");
    }
</style>

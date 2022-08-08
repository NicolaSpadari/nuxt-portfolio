<template>
    <div relative h-screen>
        <div id="container">
            <span ref="txt1" text-white>
                {{ text1 }}
            </span>
            <span ref="txt2" text-white>
                {{ text2 }}
            </span>
        </div>

        <svg id="filters">
            <defs>
                <filter id="threshold">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 255 -140"
                    />
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script lang="ts" setup>
    const txt1 = ref();
    const txt2 = ref();
    const text1 = ref("");
    const text2 = ref("");

    const texts = [
        "Why",
        "is",
        "this",
        "so",
        "satisfying",
        "to",
        "watch?"
    ];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = Number(new Date());
    let morph = 0;
    let cooldown = cooldownTime;

    text1.value = texts[textIndex % texts.length];
    text2.value = texts[(textIndex + 1) % texts.length];

    function doMorph() {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    function setMorph(fraction: number) {
        txt2.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        txt2.value.style.opacity = `${fraction ** 0.4 * 100}%`;

        fraction = 1 - fraction;
        txt1.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        txt1.value.style.opacity = `${fraction ** 0.4 * 100}%`;

        text1.value = texts[textIndex % texts.length];
        text2.value = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
        morph = 0;

        txt2.value.style.filter = "";
        txt2.value.style.opacity = "100%";

        txt1.value.style.filter = "";
        txt1.value.style.opacity = "0%";
    }

    function animate() {
        requestAnimationFrame(animate);

        const newTime = Number(new Date());
        const shouldIncrementIndex = cooldown > 0;
        const dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }
    }

    onMounted(() => {
        animate();
    });
</script>

<style lang="scss" scoped>
    #container {
        @apply absolute m-auto w-screen h-80pt inset-y-0;
        filter: url(#threshold) blur(0.6px);

        span {
            @apply absolute w-full inline-block text-5xl text-center select-none text-white;
        }
    }
</style>

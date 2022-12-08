<template>
    <div>
        <p>{{ error.message }}</p>
        <button @click="handleError()">
            resolve
        </button>
    </div>
</template>

<script lang="ts" setup>
    defineProps(["error"]);

    const handleError = () => clearError({ redirect: "/" });
</script>

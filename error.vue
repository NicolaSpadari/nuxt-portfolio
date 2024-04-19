<template>
	<div relative size-screen bg-dark-800>
		<StructurePageTitle msg="Error" text="9xl!" top="1/2!" left="1/2" translate-x="-1/2!" translate-y="-1/2!" />

		<div absolute inset-x-0 bottom-70 flex justify-center>
			<button border-2 border-white rounded px-5 py-2 text-lg text-white font-medium @click="handleError()">
				Go back
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	defineProps(["error"]);

	const handleError = () => clearError({ redirect: "/" });
</script>

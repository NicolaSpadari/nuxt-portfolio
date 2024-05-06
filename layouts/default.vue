<template>
	<div>
		<StructureNavigation />

		<div class="view">
			<slot />
		</div>

		<Waves bottom-0 md="-bottom-10" xl="-bottom-20" />
		<Noise />
	</div>
</template>

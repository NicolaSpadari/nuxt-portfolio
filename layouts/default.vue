<template>
    <div>
        <StructureNavigation />
        <div relative>
            <slot />
        </div>
        <Waves bottom-0 md="-bottom-10" xl="-bottom-20" />
        <Noise />
    </div>
</template>

import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTagify,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
	safelist: ["custom-scrollbar", "bg-dark-800", "font-text", "overflow-x-hidden"],
	shortcuts: [
		["crate", "mx-auto max-w-7xl px-4 lg:px-8 sm:px-6"],
		["flex-center", "flex justify-center items-center"],
		["size-full", "w-full h-full"],
		["size-screen", "w-screen h-screen"],
		["absolute-center-h", "left-50% transform -translate-x-50%"],
		["absolute-center-v", "top-50% transform -translate-y-50%"],
		["grab", "cursor-grab active:cursor-grabbing"],
		["custom-scrollbar", "scrollbar scrollbar-track-color-dark-800 scrollbar-thumb-color-dark-600"]
	],
	presets: [
		presetUno(),
		presetTagify(),
		presetAttributify(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle"
			}
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				heading: {
					name: "Montserrat",
					weights: ["200", "400", "700"]
				},
				text: "Inter"
			}
		}),
		presetScrollbar()
	],
	theme: {
		breakpoints: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
			uw: "2000px"
		},
		animation: {
			keyframes: {
				grain: "{ 0%, to { transform: translate(0, 0) } 10% { transform: translate(5%, 10%) } 20% { transform: translate(15%, 5%) } 30% { transform: translate(7%, 25%) } 40% { transform: translate(5%, 25%) } 50% { transform: translate(15%, 10%) } 60% { transform: translate(15%, 0) } 70% { transform: translate(0, 15%) } 80% { transform: translate(3%, 35%) } 90% { transform: translate(-10%, 10%) }}"
			}
		},
		timingFns: {
			"out-expo": "cubic-bezier(0.33,1,0.68,1)"
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});

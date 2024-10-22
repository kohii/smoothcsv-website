import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      textColor: {
				primary: "rgb(36, 36, 36)",
				secondary: "rgb(71, 85, 105)",
        link: "#18A497",
			},
      borderColor: {
				DEFAULT: "rgb(229, 229, 229)",
				focused: colors.sky[600],
			},
      colors: {
        primary: "#18A497"
      }
    },
	},
	plugins: [],
}

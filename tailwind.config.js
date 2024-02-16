/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				CDark: "#161C2D",
				CBlue: "#473BF0",
				CGreen: "#68D585",
				CLine: "#E7E9ED",
				CGray: "#F4F7FA",
			},
		},
	},
	plugins: [],
};

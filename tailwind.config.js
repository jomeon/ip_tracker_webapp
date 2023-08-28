/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"top-pattern": "url('/images/pattern-bg-desktop.png')",
				"top-pattern-mobile": "url('/images/pattern-bg-mobile.png')",
			},
		},
	},
	plugins: [],
};

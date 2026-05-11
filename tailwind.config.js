/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {  screens: {
        xs: '360px',
      },},
  },
  plugins: [require("daisyui"),('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        jolfa: {
          primary: "#f5c451",
          secondary: "#bbc5d9",
          accent: "#f43f5e",
          neutral: "#111827",
        },
      },
    ],
  },
};


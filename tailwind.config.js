/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["synthwave"],
          primary: "#ad8efe",
          secondary: "#d8b458",
          accent: "#8ccc85",
        },
      },
    ],
  },
};

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
          primary: "#895656",
          secondary: "#47080b",
          accent: "#36948e",
          neutral: "#bc7676",
          "base-100": "#ddbaba",
        },
      },
    ],
  },
};

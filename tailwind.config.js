/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: "#7ACBC2",
          200: "#16B4E1",
        },
        darkblue: {
          100: "#1D254A",
        },
      },
      spacing: {
        1280: "80rem",
      },
      backgroundImage: {
        "hero-pattern": "url('/heroBg.svg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#16B4E1",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        darkblue: {
          50: "#f8fafc",
          100: "#1D254A",
          200: "#171f3f",
          300: "#121934",
          400: "#0d1329",
          500: "#080d1e",
          600: "#030713",
          700: "#020508",
          800: "#010203",
          900: "#000000",
        },
        gray: {
          10: "#D9D9D9",
          15: "#F3F3F3",
          20: "#F8F8F8",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      spacing: {
        1280: "80rem",
      },
      backgroundImage: {
        "hero-pattern": "url('/heroBg.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "5/4": "5 / 4",
      },
    },
  },
  plugins: [],
};

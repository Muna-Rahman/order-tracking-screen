/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: "#F4F5F7",
        surface: "#FFFFFF",
        line: "#E3E6EB",
        ink: "#12151B",
        body: "#4B5665",
        muted: "#8A93A3",
        brand: {
          DEFAULT: "#1F5FBF",
          dark: "#17488F",
          light: "#E8F0FC",
        },
        danger: {
          DEFAULT: "#C4372E",
          light: "#FBEAE8",
        },
        success: {
          DEFAULT: "#1E8A5F",
          light: "#E7F6EF",
        },
        warning: {
          DEFAULT: "#B4740E",
          light: "#FDF3E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

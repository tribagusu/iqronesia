/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#294A33",
        green: "#2C8A14",
        lightGreen: "#607744",
        greenMustard: "#768948",
        mustard: "#B39C4D",
        yellow: "#F9CA3D",
        darkYellow: "#FEBF00",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        heading: ["Bebas Neue"],
        body: ["Open Sans"],
      },
    },
  },
  // plugins: [require("@headlessui/tailwindcss")],
};

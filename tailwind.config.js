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
        "clr-black": "#111",
        "clr-gray": "#2b2a2a",
        "clr-yellow": "#ffb400",
        // "clr-yellow": "#ee4b2b",
        // "clr-yellow": "#ff7f11", this my faverate
      },
    },
  },
  plugins: [],
};

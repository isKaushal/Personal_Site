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
                "clr-gray-lite": "#3A3A3A",
                "clr-yellow": "#ffb400", // default
                // "clr-yellow": "#ee4b2b", // red
                // "clr-yellow": "#fca404",
                // "clr-yellow": "#ff4200",
            },
        },
    },
    plugins: [],
}

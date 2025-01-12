/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        //textos
        "primary-100": "#F8F8FF",
        "secondary-100": "#9EA2A8",
        "tertiary-100": "#58DDA3",

        //fondos
        "bg-100": "#1B1B1B",
        "bg-200": "#212020",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        red: "hsl(0, 100%, 67%)",
        yellow: "hsl(39, 100%, 56%)",
        green: "hsl(166, 100%, 37%)",
        blue: "hsl(234, 85%, 45%)",
      },
      fontSize: {
        body: "18px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        sans: ["var(--font-hanken)"],
      },
      boxShadow: {
        card: "0 8px 25px -4px rgb(233,237,252), 0 0 25px -10px rgb(233,237,252)",
      },
      borderRadius: {
        card: "32px",
      },
      fontWeight: {
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};

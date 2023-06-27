/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      colors: {
        bgColor: "#09090b",
        primaryColor: "#c2410c",
        secondaryColor: "#d6d3d1",
        tertiaryColor: "#f8fafc",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

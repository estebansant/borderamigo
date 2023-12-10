/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1280px",
        xl: "2560px",
      },
      colors: {
        // Color palette
        black: "#10151A",
        mint: "#F8771E",
        orange: "#FF5200",
        line: "#F4F3F3",
        gray: "#888181",
        "light-gray": "#F4F4F4",
        white: "#FFFFFF",
        "bew-gray": "#FCF0E5",
        pink: "#FFF7F0",
        "line-2": "#E9E1E1",
        green: "#1D6A36",
      },
      fontFamily: {
        Petrona: ["Petrona", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        l: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "38px",
        "5xl": "46px",
      },
      borderRadius: {
        none: "0",
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        full: "50%",
      },
      boxShadow: {
        sm: "0 2px 4px 0 rgb(0 0 0 / 0.45)",
        md: "3px 4px 6px 1px rgb(0 0 0 / 0.45)",
        md2: "0 4px 6px 1px rgb(0 0 0 / 0.35)",
        md3: "3px 4px 6px 1px rgb(255 255 255 / 0.35)",
        lg: "6px 10px 15px -3px rgb(0 0 0 / 0.45)",
        xl: "9px 20px 25px -5px rgb(0 0 0 / 0.45)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

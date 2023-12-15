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
        avg: "768px",
        md: "900px",
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
        "dark-pink": "#FFE3C3",
        "line-2": "#E9E1E1",
        green: "#1D6A36",
        linearGradient:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 81.9%)",
        "mint-300": "#EC6407",
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
        sm: "0 8px 12px 6 rgb(0 0 0 / 0.15)",
        md: "0px 2px px 2px rgb(0 0 0 / 0.15)",
        md2: "0 4px 6px 1px rgb(0 0 0 / 0.12)",
        md3: "3px 4px 6px 1px rgb(255 255 255 / 0.35)",
        lg: "6px 10px 15px -3px rgb(0 0 0 / 0.45)",
        xl: "9px 20px 25px -5px rgb(0 0 0 / 0.45)",
      },
      backgroundImage: {
        main: "url('/assets/background/main_bg.png')",
        howItWorks: "url('/assets/background/how_it_works.png')",
        whyUs: "url('/assets/background/why_us.png')",
        startToday: "url('/assets/background/start_today.png')",

        // Why us images
        mb1: "url('/assets/images/mb1.png')",
        mb2: "url('/assets/images/mb2.png')",
        mb3: "url('/assets/images/mb3.png')",
        mb4: "url('/assets/images/mb4.png')",
        mb5: "url('/assets/images/mb5.png')",
        mb6: "url('/assets/images/mb6.png')",

        // Why us images on hover
        mb1Hover: "url('/assets/images/mb1Hover.png')",
        mb2Hover: "url('/assets/images/mb2Hover.png')",
        mb3Hover: "url('/assets/images/mb3Hover.png')",
        mb4Hover: "url('/assets/images/mb4Hover.png')",
        mb5Hover: "url('/assets/images/mb5Hover.png')",
        mb6Hover: "url('/assets/images/mb6Hover.png')",

        prevArrow: "url('/assets/icons/arrow_prev_active.svg')",
        nextArrow: "url('/assets/icons/arrow_next_active.svg')",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        6000: "6000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

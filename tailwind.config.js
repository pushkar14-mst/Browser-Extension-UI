/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "hsl(227, 75%, 14%)",
          800: "hsl(226, 25%, 17%)",
          700: "hsl(225, 23%, 24%)",
          600: "hsl(226, 11%, 37%)",
          300: "hsl(0, 0%, 78%)",
          200: "hsl(217, 61%, 90%)",
          100: "hsl(0, 0%, 93%)",
          0: "hsl(200, 60%, 99%)",
        },
        red: {
          400: "hsl(3, 86%, 64%)",
          500: "hsl(3, 71%, 56%)",
          700: "hsl(3, 77%, 44%)",
        },
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        sm: "14px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      lineHeight: {
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      letterSpacing: {
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        full: "9999px",
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
        "dark-gradient": "linear-gradient(180deg, #040918 0%, #091540 100%)",
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
      },
      maxWidth: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "40rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        full: "100%",
      },
      maxHeight: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "40rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        full: "100%",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
    plugins: [],
  },
};

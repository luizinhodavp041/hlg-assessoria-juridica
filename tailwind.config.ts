import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000644",
          light: "#000873", // Um tom mais claro para hover
          dark: "#000415", // Um tom mais escuro para estados ativos
        },
        white: "#FFFFFF",
        // Sugestão de tons neutros complementares
        neutral: {
          50: "#F8F9FC",
          100: "#F1F2F9",
          200: "#E4E6F1",
          300: "#D1D5E8",
          400: "#9AA1C8",
          500: "#6B749E",
          600: "#4A5075",
          700: "#363B57",
          800: "#24273A",
          900: "#14162B",
        },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

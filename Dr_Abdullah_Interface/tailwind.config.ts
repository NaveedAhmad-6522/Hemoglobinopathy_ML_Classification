import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 12px 30px -12px rgb(15 23 42 / 0.16)",
        card: "0 2px 12px rgb(15 23 42 / 0.06)",
      },
      colors: {
        ink: "#16233A",
        brand: {
          50: "#eef8ff",
          100: "#d9f0ff",
          200: "#b8e3ff",
          500: "#1486cc",
          600: "#0874b8",
          700: "#075b92",
          900: "#103b5d",
        },
      },
    },
  },
  plugins: [],
};

export default config;

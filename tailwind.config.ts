import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#050505",
        "bg-glass": "#0F0F13",
        "accent-neon": "#00E5FF",
        "text-main": "#FFFFFF",
        "text-secondary": "#A1A1AA",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

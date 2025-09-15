import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors from style-guide.md
        primary: {
          dark: "#121512",
          text: "#525252",
          black: "#1E1E1E",
        },
        background: {
          white: "#FFFFFF",
          "light-gray": "#F3F3F3",
          "subtle-gray": "#F5F5F5",
        },
        neutral: {
          "dark-gray": "#3A3A3A",
          "medium-gray": "#323232",
          charcoal: "#4D4D4D",
        },
        accent: {
          success: "#4BDD5C",
          link: "#0000EE",
          black: "#000000",
        },
      },
      fontFamily: {
        primary: ["Instrument Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      spacing: {
        // 8px base spacing system
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      borderRadius: {
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
      },
      boxShadow: {
        "sm": "0 2px 4px rgba(0, 0, 0, 0.05)",
        "md": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "lg": "0 8px 24px rgba(0, 0, 0, 0.1)",
        "xl": "0 16px 48px rgba(0, 0, 0, 0.12)",
      },
      transitionDuration: {
        "fast": "0.15s",
        "base": "0.3s",
        "slow": "0.5s",
      },
    },
  },
  plugins: [],
};

export default config;
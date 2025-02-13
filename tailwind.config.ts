import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282c33",
        secondary: "#1f2329",
        textPrimary: "#ffffff",
        textSecondary: "#b0b8c1",
        border: "#4CAF50",
        accent: "#ff0000",
        accentHover: "#00FF7F",
        error: "#f44336",
        success: "#4CAF50",
        warning: "#FF9800",
        disabled: "#3a3f48",
      },
      boxShadow: {
        "dark-lg":
          "0 10px 15px -3px rgba(0, 255, 127, 0.3), 0 4px 6px -2px rgba(0, 255, 127, 0.2)",
        "accent-sm": "0 1px 2px rgba(76, 175, 80, 0.5)",
        "accent-lg": "0 5px 15px rgba(0, 200, 83, 0.6)",
        "soft-green": "0 4px 10px rgba(0, 200, 83, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;

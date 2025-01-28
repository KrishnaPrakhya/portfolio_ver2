import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#1a1a1a", // Darker background
        accent: {
          DEFAULT: "#00ffff", // Cyan accent
          hover: "#00e0e0", // Slightly darker cyan on hover
        },
        background: "#0d0d0d", // Very dark background
        foreground: "#f5f5f5", // Light gray text
        card: {
          DEFAULT: "#262626", // Dark card background
          foreground: "#f5f5f5", // Light gray text on card
        },
        popover: {
          DEFAULT: "#262626", // Dark popover background
          foreground: "#f5f5f5", // Light gray text on popover
        },
        secondary: {
          DEFAULT: "#333333", // Darker gray
          foreground: "#f5f5f5", // Light gray text
        },
        muted: {
          DEFAULT: "#707070", // Muted gray
          foreground: "#d4d4d4", // Light gray text
        },
        destructive: {
          DEFAULT: "#ff4d4d", // Red
          foreground: "#f5f5f5", // Light gray text
        },
        border: "#404040", // Border color
        input: "#404040", // Input field color
        ring: "#00ffff", // Ring color (cyan)
        chart: {
          "1": "#00ffff", // Cyan
          "2": "#00e0e0", // Slightly darker cyan
          "3": "#00c2c2", // Even darker cyan
          "4": "#00a3a3", // Darker cyan
          "5": "#008585", // Darkest cyan
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

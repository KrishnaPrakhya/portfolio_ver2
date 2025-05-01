/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Root pages (Pages Router, if used)
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Root app (App Router)
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Src pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Src components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Src app
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
      primary: "var(--font-jetbrainsMono, 'JetBrains Mono', monospace)",
      secondary: "var(--font-poppins, 'Poppins', sans-serif)",
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
        primary: "#6B46C1", // Updated to purple from your nav
        accent: {
          DEFAULT: "#00ffff",
          hover: "#00e0e0",
        },
        background: "#0d0d0d",
        foreground: "#f5f5f5",
        card: {
          DEFAULT: "#262626",
          foreground: "#f5f5f5",
        },
        popover: {
          DEFAULT: "#262626",
          foreground: "#f5f5f5",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#f5f5f5",
        },
        muted: {
          DEFAULT: "#707070",
          foreground: "#d4d4d4",
        },
        destructive: {
          DEFAULT: "#ff4d4d",
          foreground: "#f5f5f5",
        },
        border: "#404040",
        input: "#404040",
        ring: "#6B46C1", // Purple ring
        chart: {
          "1": "#00ffff",
          "2": "#00e0e0",
          "3": "#00c2c2",
          "4": "#00a3a3",
          "5": "#008585",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
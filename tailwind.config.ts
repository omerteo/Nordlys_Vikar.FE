import type { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-pattern-background": "linear-gradient(180deg, #8C55E9 0%, #4C73E6 100%)",
        "hero-pattern-outer":
          "linear-gradient(179.94deg, rgba(255, 255, 255, 0.06) -5.48%, rgba(255, 255, 255, 0) 96.9%);",
        "hero-pattern-inner":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) -25.29%, rgba(255, 255, 255, 0) 97.21%)",
      },
      fontFamily: {
        body: [
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("@tailwindcss/typography"), daisyui],
}
export default config

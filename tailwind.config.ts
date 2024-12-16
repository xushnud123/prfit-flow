import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(239, 253, 245)",
          100: "rgb(217, 251, 232)",
          200: "rgb(179, 245, 209)",
          300: "rgb(117, 237, 174)",
          400: "rgb(0, 220, 130)",
          500: "rgb(0, 193, 106)",
          600: "rgb(0, 161, 85)",
          700: "rgb(0, 127, 69)",
          800: "rgb(1, 101, 56)",
          900: "rgb(10, 83, 49)",
          950: "rgb(5, 46, 22)",
          DEFAULT: "rgb(0, 193, 106)", // Default primary color
        },
        gray: {
          50: "rgb(248, 250, 252)",
          100: "rgb(241, 245, 249)",
          200: "rgb(226, 232, 240)",
          300: "rgb(203, 213, 225)",
          400: "rgb(148, 163, 184)",
          500: "rgb(100, 116, 139)",
          600: "rgb(71, 85, 105)",
          700: "rgb(51, 65, 85)",
          800: "rgb(30, 41, 59)",
          900: "rgb(15, 23, 42)",
          950: "rgb(2, 4, 32)",
        },
        slate: {
          100: "#f1f5f9",
          400: "#94a3b8",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

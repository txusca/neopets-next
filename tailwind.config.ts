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
        background: "#FFDE59",
        mainColor: "#703748",
      },
      height: {
        '129': '515px',
        '192': '768px',
        '172': '688px'
      }
    },
  },
  plugins: [],
} satisfies Config;

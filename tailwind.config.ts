import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'nike-futura': ['Futura-Bold', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;

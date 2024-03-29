import type { Config } from "tailwindcss";
const scrollbar = require("tailwind-scrollbar-hide");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        title: "0 8px 6px rgba(79, 216, 224)",
      },
    },
  },
  plugins: [
    // Include the custom scrollbar plugin
    scrollbar,
  ],
};
export default config;

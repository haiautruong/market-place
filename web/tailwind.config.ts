import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        drone: ["DroneRangerPro", "sans-serif"],
      },
      colors: {
        primary: "#EC4899",
        secondary: "#9333EA",
        background: "#17161A",
        accent: "#FFD700",
      },
    },
  },
  plugins: [],
};

export default config;

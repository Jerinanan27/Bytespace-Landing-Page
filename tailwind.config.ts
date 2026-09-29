import type { Config } from "tailwindcss";

// Design tokens from the ByteSpace Figma style guide.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "persian-blue": "#003BE2",
        "electric-lime": {
          DEFAULT: "#D4FB20",
          400: "#D4FB20",
          500: "#CBFC01",
        },
        "electric-violet": { 600: "#7F30F7", 950: "#300B6A" },
        ink: "#040819",
        black: { DEFAULT: "#000000", 700: "#4F4F4F" },
        gray: {
          50: "#F5F5F6",
          100: "#E5E6E8",
          200: "#CED0D3",
          300: "#ABAEB5",
          400: "#82868E",
          700: "#4B4C53",
          800: "#424348",
          900: "#3A3B3F",
          950: "#242528",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      letterSpacing: {
        // Figma's -1% tracking on every Poppins style
        heading: "-0.01em",
      },
      borderRadius: {
        card: "16px",
        pill: "24px",
      },
      boxShadow: {
        // Figma effect "A": layered soft shadow used on photos
        float:
          "51px 73px 72px 0 rgba(0,0,0,0.13), 37px 53px 56px 0 rgba(0,0,0,0.11), 26px 37px 36px 0 rgba(0,0,0,0.1), 17px 24px 24px 0 rgba(0,0,0,0.09), 10px 15px 16px 0 rgba(0,0,0,0.08), 5px 8px 10px 0 rgba(0,0,0,0.07), 2px 3px 6px 0 rgba(0,0,0,0.06), 0.5px 0.75px 3px 0 rgba(0,0,0,0.04)",
      },
      dropShadow: {
        float: [
          "51px 73px 36px rgba(0,0,0,0.13)",
          "17px 24px 12px rgba(0,0,0,0.09)",
          "2px 3px 3px rgba(0,0,0,0.06)",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Pretendard", "Apple SD Gothic Neo", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Consolas", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#f7f1e3",
        cream: "#fff8df",
        graphite: "#161616",
        sea: "#067a8d",
        coral: "#ef5a3c",
        mint: "#85e6c5",
        yellow: "#f8d956",
      },
      animation: {
        "rise-in": "riseIn 820ms cubic-bezier(.16,1,.3,1) both",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#24313f",
        muted: "#64717f",
        line: "#dde5e8",
        paper: "#fbf8f2",
        mint: "#3ca58b",
        "mint-dark": "#23735f",
        coral: "#f07861",
        sun: "#f2bf5e",
        sky: "#dff3f4",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(35, 49, 63, .13)",
        card: "0 10px 26px rgba(35, 49, 63, .07)",
      },
      fontFamily: {
        sans: [
          "Microsoft YaHei",
          "PingFang SC",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

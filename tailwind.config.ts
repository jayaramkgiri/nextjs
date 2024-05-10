import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "text-primary": "#404040",
        "color-states-common-black": "#223354",
        "text-secondary": '#35353A',
        indianred: "#eb5757",
        seagreen: "#219653",
        dimgray: "rgba(97, 97, 97, 0.9)",
        darkgray: "#aeaeae",
        color: "#130912",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#ebebeb",
        },
        silver: {
          "100": "#c7c7c7",
          "200": "rgba(196, 202, 205, 0.4)",
        },
        chocolate: "rgba(231, 121, 23, 0.16)",
      },
      spacing: {},
      fontFamily: {
        "title-lg": "Inter",
      },
      borderRadius: {
        "9xl": "28px",
        lgi: "19px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lg: "18px",
      "17xl": "36px",
      xs: "12px",
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;


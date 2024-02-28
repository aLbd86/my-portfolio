import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #F1F1F1 0%, rgba(234, 234, 234, 0) 11.5%, rgba(217, 217, 217, 0) 50%, rgba(232, 232, 232, 0) 88.5%, #F1F1F1 100%)",
      },
      keyframes: {
        typingP: {
          'from': { maxWidth: '0' },
          'to': { maxWidth: '100%' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "#F1861D",
          },
        },
        slideToLeft: {
          "0%": { transform: "translateX(210%)" },
          "100%": { transform: "translateX(-30%)" },
        },
        slideToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        typing: "typing 2.6s steps(22) infinite alternate, blink .5s infinite",
        typingP: "typing 4s steps(40) 1s forwards, blink .5s infinite",
        slideToLeft: "slideToLeft 10s linear infinite",
        slideToRight: "slideToRight 12s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1861D",
          secondary: "#36B39C",
          accent: "#36B39C",
          neutral: "#1f1f1f",
          // Guillemet pour une variable qui a un tiret base != base-100
          "base-100": "#f1f1f1",
          info: "#00b5ff",
          success: "#36B39C",
          warning: "#ffab00",
          error: "#ff0047",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;

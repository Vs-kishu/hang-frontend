module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "hsl(33, 75%, 62%)",
        dark: {
          100: "hsl(50, 100%, 9%)",
          200: "hsl(240, 100%, 6%)",
        },
        light: {
          100: "hsl(223, 100%, 100%)",
          200: "hsl(223, 56%, 94%)",
        },
        "light-1": "hsl(223, 100%, 100%)",
        "light-2": "hsl(223, 56%, 94%)",
      },
      fontFamily: {
        sans: ["Comfortaa", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Comfortaa"],
        body: ["Comfortaa"],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [require("daisyui")],
};

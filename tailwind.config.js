/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceCustom: {
          "0%, 100%": {
            transform: "translateY(-3%)",
            animationTimingFunction: "ease-in-out",
          },
          "40%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
        },
      },
      animation: {
        bounceCustom: "bounceCustom 3s infinite", // Custom Bounce (3s duration)
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 24px 120px rgba(59, 130, 246, 0.18)",
      },
      colors: {
        night: "#050816",
      },
    },
  },
  plugins: [],
};

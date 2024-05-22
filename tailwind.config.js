/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial-dot-red-blue":
          "radial-gradient(circle at top right, #18082D 0%, #0E0C11 100%)",
      }),
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

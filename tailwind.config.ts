/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Archivo", "sans-serif"],
        body: ["var(--font-body)", "Space Grotesk", "sans-serif"],
      },
      colors: {
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        cta: "var(--color-cta)",
        backgroundColor: "var(--color-background)",
        textColor: "var(--color-text)",
        cardBg: "var(--color-card-bg)",
        cardBorder: "var(--color-card-border)",
        badgeBg: "var(--color-badge-bg)",
      },
    },
  },
  plugins: [],
};

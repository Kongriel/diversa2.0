/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        "flow-1": "0.8rem", // Adjust as needed
        "flow-2": "1.2rem", // Adjust as needed
        "flow-3": "4.8rem", // Adjust as needed
      },
      colors: {
        // Define your custom colors here
        "brand-beige-00": "#fefefb",
        "brand-beige-10": "#f7f6e8" /* Background */,
        "brand-turquoise-00": "#e6fafe",
        "brand-turquoise-20": "#b4f1fd",
        "brand-turquoise-50": "#69e3fc" /* Brand */,
        "brand-yellow-40": "#ffea80" /* Brand */,
        "brand-yellow-100": "#e5c000",
        "brand-orange-70": "#ff7733" /* Brand */,
        "grey-00": "#ffffff",
        "grey-20": "#cccccc",
        "grey-40": "#999999",
        "grey-60": "#666666",
        "grey-80": "#333333",
        "grey-100": "#000000",
        "bg-farve": "#1b2dc8" /*blå*/,

        "farve-1": "#123456",
        "farve-2": "#abcdef",
        "farve-3": "#fedcba",
      },
      fontFamily: {
        // Add custom font families here
        poppins: ["Poppins", "sans-serif"],
        libreBaskerville: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};

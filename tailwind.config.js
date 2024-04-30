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
        "farve-text": "#1b2dc8" /*blå*/,
        "farve-1": "#ffc66b",

        "farve-2": "#abcdef",
        "farve-3": "#fedcba",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        libreBaskerville: ["Libre Baskerville", "serif"],
      },
      boxShadow: {
        "glass-1": "0 8px 32px rgba(31, 38, 117, 0.36)",
      },
      backgroundImage: (theme) => ({
        "custom-image": "url('/background.jpg')",
        "grid-svg": "url(https://play.tailwindcss.com/img/grid.svg)",
      }),
      maskImage: {
        "linear-white-gradient": "linear-gradient(180deg, white, rgba(255,255,255,1))",
      }, // Replace 'background.jpg' with your image path
    },
  },
  plugins: [],
};

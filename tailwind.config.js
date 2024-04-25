/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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

        "farve-1": "#123456",
        "farve-2": "#abcdef",
        "farve-3": "#fedcba",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-libre-baskerville)'],
        mono: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}

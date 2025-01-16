// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind purges unused styles in React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

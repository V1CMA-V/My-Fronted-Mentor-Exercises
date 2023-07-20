/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "Kumbh-Sans": ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "pattern-bottom": "url('../images/bg-pattern-bottom.svg')",
        "pattern-top": "url('../images/bg-pattern-top.svg')",
      }),
      backgroundPosition: {
        "-bottom": "bottom -600px right -150px",
        "-top": "top -500px left -200px",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
    },
  },
  plugins: [],
};

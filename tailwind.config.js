const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_layouts/*.html",
    "./_posts/*.html",
    "./*.html",
    "./_site/**/*.html",
    "./_site/index.html",
    "index.html",
    "./articles/articles.html",
    "./projects/projects.html",
    "./*.md",
  ],

  theme: {
    extend: {
      typography: ({ theme }) => ({
        gray: {
          css: {
            "--tw-prose-invert-body": theme("colors.gray[200]"),
          },
        },
      }),
      colors: {
        midnight: "#0B111F",
      },
    },

    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "850px",
        xl: "850px",
        "2xl": "850px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

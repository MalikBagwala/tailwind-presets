const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          100: "#82017E",
        },
      },
    },
  },
};

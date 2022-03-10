const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: {},
  },
};

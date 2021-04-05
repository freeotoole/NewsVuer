module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['Libre Baskerville', 'Georgia', 'serif'],
      body: ['Libre Baskerville', 'Georgia', 'serif'],

    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },

};

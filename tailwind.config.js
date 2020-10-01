module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.jsx',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'phyxable-blue': '#18214D',
        'phyxable-black': '#07122A',
      },
    },
  },
  variants: {},
  plugins: [],
};

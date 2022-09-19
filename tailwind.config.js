module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './src/**/*.js',
    './src/**/*.jsx',
    './pages/**/*.ts',
    './pages/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

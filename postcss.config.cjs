module.exports = {
  from: undefined, // This will be set by the bundler
  to: undefined,   // This will be set by the bundler
  map: process.env.NODE_ENV === 'production' ? false : { inline: true },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

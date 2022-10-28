require('postcss-custom-properties')({
  preserve: false, // completely reduce all css vars
  importFrom: [
    'src/index.css', // look here for the new values
  ],
});
require('postcss-calc');
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

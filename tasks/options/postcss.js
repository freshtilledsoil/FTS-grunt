module.exports = {
    options: {
    map: true, // inline sourcemaps
  
    processors: [
      // require('pixrem')(), // add fallbacks for rem units
      require('autoprefixer')({ browsers: 'last 3 versions' }), // add vendor prefixes
    ]
  },
  dist: {
    src: 'src/assets/css/*.css'
  }
  
}
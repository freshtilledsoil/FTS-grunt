module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['javascripts/app.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['stylesheets/*/*', 'stylesheets/*.scss'],
    tasks: ['sass', 'cssmin', 'autoprefixer'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  },
}
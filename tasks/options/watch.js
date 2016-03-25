module.exports = {

  scripts: {
    files: ['src/assets/js/*.js', 'src/assets/js/*/*.js'],
    tasks: ['jshint', 'concat', 'uglify', 'copy'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['src/assets/css/**', 'src/assets/css/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin', 'copy'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['src/assets/images/**/*.{png,jpg,gif}', 'src/assets/images/*.{png,jpg,gif}'],
    tasks: ['imagemin', 'copy'],
    options: {
      spawn: false,
    }
  },
  icons: {
    files: ['src/assets/icons/*.svg', 'src/assets/icons/*.svg'],
    tasks: ['svgmin', 'svgstore', 'copy'],
    options: {
      spawn: false,
    }
  }
  
}
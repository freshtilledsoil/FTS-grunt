module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src/assets/images/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'src/assets/images/'
    }]
  }
}

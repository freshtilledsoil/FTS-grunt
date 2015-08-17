module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'stylesheets/manifest.css': 'stylesheets/*'
    }
  }
}
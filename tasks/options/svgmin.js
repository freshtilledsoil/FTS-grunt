module.exports = {
  options: {
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeUselessStrokeAndFill: false
      }
    ]
  },
  multiple: {
    files: [{
      expand: true,
      cwd: 'images/solo_svg',
      src: ['**/*.svg'],
      dest: 'images/'
    }]
  }
}

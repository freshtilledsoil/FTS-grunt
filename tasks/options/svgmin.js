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
      cwd: 'src/assets/icons/',
      src: ['**/*.svg'],
      dest: 'src/assets/icons/'
    }]
  }
}

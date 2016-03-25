module.exports = {
  main: {
    files: [
      {
        expand: true,
        src: ['src/assets/css/*.css'],
        dest: 'dist/assets/css/',
        filter: 'isFile',
        flatten: true,
      },
      {
        expand: true,
        src: ['src/assets/js/*.js'],
        dest: 'dist/assets/js/',
        filter: 'isFile',
        flatten: true,
      },
      {
        expand: true,
        src: ['src/includes/*'],
        dest: 'dist/includes/',
        flatten: true,
      },
      {
        expand: true,
        src: ['src/*.php'],
        dest: 'dist/',
        filter: 'isFile',
        flatten: true,
      },
      {
        expand: true,
        src: ['src/*.html'],
        dest: 'dist/',
        filter: 'isFile',
        flatten: true,
      },
      {
        expand: true,
        src: ['**'],
        cwd: 'src/assets/icons/',
        dest: 'dist/assets/icons/'
      },
      {
        expand: true,
        src: ['**'],
        cwd: 'src/assets/images/',
        dest: 'dist/assets/images/'
      },
      {
        expand: true,
        src: ['**'],
        cwd: 'src/assets/fonts/',
        dest: 'dist/assets/fonts/'
      }
    ],
  },
}
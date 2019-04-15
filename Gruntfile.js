

module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          // Task-specific options go here.
          engine: 'gm',
          concurrency: 1,
          sizes: [
            {width: 900, quality: 80},
            {width: 600, quality: 80},
            {width: 300, quality: 80},
          ],
          separator: '_',
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'img/microgreens_originals/',
          dest: 'img/microgreens/'
        }]
      }
    },
  })
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};

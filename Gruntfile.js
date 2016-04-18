module.exports = function(grunt) {

  grunt.initConfig({

    bower_concat: {

      all: {
        dest: { 'js': 'public/javascripts/vendor.js' },
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/vendor.js": ["public/javascripts/vendor.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-bower-concat");
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("default", ["bower_concat", "uglify"]);
};
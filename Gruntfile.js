module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= pkg.svgsrc %>',
            src: ['*.svg'],
            dest: '<%= pkg.svgdest %>',
            ext: '.svg'
          }
        ]
      }
    },
    compress: {
      dist: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        files: [
          {
            expand: true,
            cwd: '<%= pkg.svgdest %>',
            src: ['*.svg'],
            dest: '<%= pkg.svgdest %>',
            ext: '.svg'
          }
        ]
      }
    },
    rename: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= pkg.svgdest %>',
            src: ['*.svg.gz'],
            dest: '<%= pkg.svgdest %>',
            ext: '.svgz'
          }
        ] 
      }
    },
    watch: {
      dist: {
        files: ['<%= pkg.svgsrc %>*.svg'],
        tasks: ['svgmin','compress','rename']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-rename');
    
  grunt.registerTask('default', ['svgmin','compress','rename']);

};
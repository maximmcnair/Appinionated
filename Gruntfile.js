module.exports = function(grunt) {
  // Project configuration.
  var config =
      { stylus:
        { compile:
          { options: { compress: true }
          , files: { 'build/assets/css/global.css': 'app/stylus/main.styl' }
          }
        }
      , jade:
        { compile:
          { options:
            { data:
              { debug: false
              , compress: true
              }
            }
          , files:
            // Add in your jade template files here.
            { 'build/index.html': [ 'app/templates/index.jade' ] }
          }
        }
      , browserify:
        {'build/assets/js/app.js': ['app/js/app.js']
        , options: {
            transform: ['./lib/browjadify.js']
          }
        }
      , watch:
        { stylus:
          { files: ['app/stylus/*.styl', 'app/stylus/*/*.styl']
          , tasks: ['stylus']
          , options: {
              livereload: true,
            }
          }
        , jade:
          { files: ['app/templates/*.jade', 'app/templates/*/*.jade']
          , tasks: ['jade']
          , options: {
              livereload: true,
            }
          }
        , js:
          { files: ['app/js/*.js']
          , tasks: ['browserify']
          , options: {
              livereload: true,
            }
          }
        }
      }

  grunt.initConfig(config)

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browserify')

  // Default task.
  grunt.registerTask('default', ['stylus', 'jade', 'browserify', 'watch'])
  grunt.registerTask('build', ['stylus', 'jade'])
}
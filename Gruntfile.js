const webp = require('imagemin-webp');

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/app/**/*.js'],
        dest: 'gruntdist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        // The banner is inserted at the top of the output
        banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'gruntdist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'src/styles.css': 'src/scss/styles.scss',
          'src/app/app.component.css': 'src/app/app.component.scss',
          'src/app/home/home.component.css': 'src/app/home/home.component.scss',
          'src/app/about-me/about-me.component.css': 'src/app/about-me/about-me.component.scss'
          // Add other scss files here
        }
      }
    },

    modernizr: {
      dist: {
        "crawl": false,
        "customTests": [],
        "dest": "gruntdist/modernizr-output.js",
        "tests": [
          "webp"
        ],
        "options": [
          "setClasses"
        ],
        "uglify": true
      }
    },

    watch: {
      files: [
        'src/**/*.scss',  // compile sass
        //'uglify.dist.files',  // minify js
        //'src/assets/media_src/raw/background/*.{png,jpg,gif}',  // responsive bg 
        // 'src/assets/media_src/min/about_me'
        // 'src/assets/media_src/min/portfolio'
        //'src/assets/media_src/responsive/**/*.{png,jpg,gif}',  // minify images
        ],
      tasks: [
        'sass',
        //'uglify',
        //'responsive_images:bg',
        //'imagemin',
        ]
    },

    imagemin: {
      // Minify all images in media_src and transfer to media
      webp: {
        options: {
          use: [webp()] // plugin to use
        },
        files: [{
          expand:true,
          cwd: 'src/assets/media_src/responsive',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/assets/media',
          ext: '.min.webp'
        }]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'src/assets/media_src/responsive',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/assets/media',
          ext: '.min.jpg'
        }]
      }
      /*
      png: {
        options: {
          optimizationLevel: 7,
        },
        files: [{
          expand: true
        }]
      }
      */
    },

    responsive_images: {
      bg: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1920,
            height: 1280,
            suffix: "_large_1x"
          },
          {
            width: 3648,
            height: 2560,
            suffix: "_large_2x"
          },
          {
            width: 1250,
            height: 950,
            suffix: "_normal_1x"
          },
          {
            width: 2500,
            suffix: "_normal_2x"
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{gif,jpg,png}'],
          cwd: 'src/assets/media_src/raw/background',
          dest: 'src/assets/media_src/responsive/background'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['src/assets/media', 'src/assets/media_src/responsive']
      }
    }

    

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.registerTask('images', ['responsive_images', 'imagemin']);
  //grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};
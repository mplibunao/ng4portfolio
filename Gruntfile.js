const webp = require('imagemin-webp');
const jpegoptim = require('imagemin-jpegoptim');

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
      // Not supported by default in webpack
      webp: {
        options: {
          use: [webp()] // plugin to use
        },
        files: [{
          expand:true,
          cwd: 'src/assets/media_src/responsive',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/assets/media',
          ext: '.webp'
        }]
      },
      jpg: {
        options: {
          progressive: true,
          //use: [jpegoptim({progressive:true, max:80})]
        },
        files: [{
          expand: true,
          cwd: 'src/assets/media_src/responsive',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/assets/media',
          ext: '.jpg'
        }]
      },
      svgMin: {
        options: {
          svgoPlugins: [{removeUselessStrokeAndFill: false}]
        },
        files: [{
          expand: true,
          cwd: 'src/assets/media_src/raw/portfolio',
          src: ['**/*.svg'],
          dest: 'src/assets/media_src/compressed/portfolio',
          ext: '.svg'
        }]
      }
    },

    responsive_images: {
      bg: {
        options: {
          engine: 'im',
          aspectRatio: false,
          sizes: [{
            width: 1920,
            height: 1280
          },
          {
            width: 1250,
            height: 950
          },
          ]
        },
        files: [{
          expand: true,
          src: ['**/*.{gif,jpg,png}'],
          cwd: 'src/assets/media_src/raw/background',
          dest: 'src/assets/media_src/responsive/background'
        }]
      },
      profile: {
        options: {
          engine: 'im',
          aspectRatio: false,
          sizes: [{
            width: '300px',
            height: '300px',
            suffix: "_small_1x",
          },
          {
            width: '600px',
            height: '600px',
            suffix: "_small_2x",
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{gif,jpg,png,jpeg,JPG}'],
          cwd: 'src/assets/media_src/raw/about-me',
          dest: 'src/assets/media_src/responsive/about-me'
        }]
      }
      
    },

    /* Clear out the images directory if it exists */
    clean: {
      imgBuild: {
        src: ['src/assets/media_src/responsive']
      },
      clearImg: {
        src: ['src/assets/media']
      }
    },

    "imagemagick-convert": {
      svg: {
        args: ['src/assets/media_src/raw/portfolio/*.png', 'src/assets/media_src/raw/portfolio/sample1.svg'],
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
  grunt.loadNpmTasks('grunt-imagemagick');
  
  grunt.registerTask('svg', ['imagemagick-convert']);
  grunt.registerTask('images', ['responsive_images', 'imagemin', 'clean:imgBuild']);
  //grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};
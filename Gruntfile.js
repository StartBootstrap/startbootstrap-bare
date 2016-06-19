module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Copy Bower components into source directory
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/',
                src: [
                    'css/bootstrap.css',
                    'css/bootstrap.min.css',
                    'js/bootstrap.js',
                    'js/bootstrap.min.js'
                ],
                dest: 'dist'
            },
            jquery: {
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: [
                    'jquery.js',
                    'jquery.min.js'
                ],
                dest: 'dist/js'
            },
            js: {
                expand: true,
                cwd: 'src/js/',
                src: [
                    '<%= pkg.name %>.js',
                ],
                dest: 'dist/js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"],
                },
                files: {
                    "dist/css/<%= pkg.name %>.css": "src/less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    compress: true
                },
                files: {
                    "dist/css/<%= pkg.name %>.min.css": "src/less/<%= pkg.name %>.less"
                }
            }
        },
        uglify: {
            minified: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['dist/css/<%= pkg.name %>.css', 'dist/css/<%= pkg.name %>.min.css', 'dist/js/<%= pkg.name %>.js', 'dist/js/<%= pkg.name %>.min.js']
                }
            }
        },
        pug: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    'dist/index.html': ['src/templates/index.pug'],
                    'dist/page.html': ['src/templates/page.pug']
                }
            }
        },
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            },
            pug: {
                files: ['src/templates/**/*'],
                tasks: ['pug']
            }
        },
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', ['copy', 'less', 'uglify', 'pug', 'usebanner']);

};

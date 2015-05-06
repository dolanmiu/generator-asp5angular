/*globals module */
// Add vendor prefixed styles
module.exports = function (gruntfile) {
    'use strict';

    var autoprefixer = {};

    autoprefixer.options = {
        browsers: ['last 1 version']
    };

    autoprefixer.server = {
        options: {
            map: true
        },
        files: [{
            expand: true,
            cwd: '<%= yeoman.temp %>/styles/',
            src: '{,*/}*.css',
            dest: '<%= yeoman.temp %>/styles/'
        }]
    };

    autoprefixer.dist = {
        files: [{
            expand: true,
            cwd: '<%= yeoman.temp %>/styles/',
            src: '{,*/}*.css',
            dest: '<%= yeoman.temp %>/styles/'
        }]
    };

    gruntfile.insertConfig('autoprefixer', JSON.stringify(autoprefixer));
};
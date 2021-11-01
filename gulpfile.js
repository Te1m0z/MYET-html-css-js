'use strict';

global.$ = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    sync: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config.js'),
        build: 'docs',
    }
}

$.path.tasks.forEach(task => {
    require(task)()
})

$.gulp.task('default', $.gulp.series(
    'pug',
    'styles',
    'scripts',
    'img',
    'libs',
    'copy:fonts',
    'copy:img',
    $.gulp.parallel('watch', 'serve')
))
'use strict';

global.$ = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    sync: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config.js')
    }
}

$.path.tasks.forEach(task => {
    require(task)()
})

$.gulp.task('default', $.gulp.series(
    'sass:dev',
    $.gulp.parallel('watch', 'serve')
))

// $.gulp.task('build', $.gulp.series(
//     $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img', 'fonts', 'svg')
// ));
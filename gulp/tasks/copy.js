module.exports = () => {
    $.gulp.task('copy:fonts', () => {
        return $.gulp.src([
            'src/static/fonts/**/*.*',
        ])
            .pipe($.gulp.dest($.path.build + '/fonts/'))
    })

    $.gulp.task('copy:img', () => {
        return $.gulp.src([
            'src/static/img/**/*.*',
        ])
            .pipe($.gulp.dest($.path.build + '/img/'))
    })
}
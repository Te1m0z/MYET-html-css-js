module.exports = () => {
    $.gulp.task('copy:fonts', () => {
        return $.gulp.src([
            'src/static/fonts/**/*.*',
        ])
            .pipe($.gulp.dest('build/fonts/'))
    })

    $.gulp.task('copy:img', () => {
        return $.gulp.src([
            'src/static/img/**/*.*',
        ])
            .pipe($.gulp.dest('build/img/'))
    })
}
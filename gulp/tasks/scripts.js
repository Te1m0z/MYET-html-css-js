module.exports = () => {
    $.gulp.task('scripts:build', () => {
        return $.gulp.src('src/js/common/**/*.js')
            .pipe($.plugins.uglify())
            .pipe($.plugins.concat('common.min.js'))
            .pipe($.gulp.dest('build/js'))
    })

    $.gulp.task('scripts:libs', () => {
        return $.gulp.src('src/js/libs/**/*.js')
            .pipe($.gulp.dest('build/js/libs'))
    })
}
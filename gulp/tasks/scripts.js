module.exports = () => {
    $.gulp.task('scripts', () => {
        return $.gulp.src('src/static/js/**/*.js')
            .pipe($.plugins.uglify())
            .pipe($.plugins.concat('common.min.js'))
            .pipe($.gulp.dest($.path.build + '/js'))
    })
}
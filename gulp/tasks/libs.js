module.exports = () => {
    $.gulp.task('libs', () => {
        return $.gulp.src('src/static/libs/**/*.*')
            .pipe($.gulp.dest($.path.build + '/libs'))
    })
}
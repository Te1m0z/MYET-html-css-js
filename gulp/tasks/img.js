module.exports = () => {
    $.gulp.task('img', () => {
        return $.gulp.src('src/img/*.{png,jpg,jpeg,svg}')
            .pipe($.gulp.dest('build/img'))
    })
}
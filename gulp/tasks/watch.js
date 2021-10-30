module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('sass:dev'))
        $.gulp.watch('src/index.html', $.sync.stream())
    })
}
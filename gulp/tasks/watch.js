module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('styles'))
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts'))
        $.gulp.watch('src/static/fonts/**/*.*', $.gulp.series('copy:fonts'))
        $.gulp.watch('src/static/img/**/*.*', $.gulp.series('copy:img'))
        $.gulp.watch('src/static/libs/**/*.*', $.gulp.series('libs'))
    })
}
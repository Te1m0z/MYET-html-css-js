module.exports = () => {
    $.gulp.task('img', () => {
        return $.gulp.src('src/static/img/*.{png,jpg,jpeg,svg}')
            .pipe($.gulp.dest($.path.build + '/img'))
    })
}
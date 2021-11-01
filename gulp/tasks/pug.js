module.exports = () => {
    $.gulp.task('pug', () => {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.plugins.pug({
                pretty: true
            }))
            .pipe($.gulp.dest($.path.build))
            .on('end', $.sync.reload)
    })
}
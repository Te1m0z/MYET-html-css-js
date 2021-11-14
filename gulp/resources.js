export const resources = () => {
    return $.gulp.src('src/static/resources/**/*.*')
        .pipe($.gulp.dest($.path.build + '/resources/'))
}
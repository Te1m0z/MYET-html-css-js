import gulpPug from 'gulp-pug'

export const pug = () => {
    return $.gulp.src('src/pug/pages/*.pug')
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe($.gulp.dest($.path.build))
        .on('end', $.browser.reload)
}
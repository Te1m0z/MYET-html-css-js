import imagemin from 'gulp-imagemin'

export const img = () => {
    return $.gulp.src('src/static/img/*.{png,jpg,jpeg,svg}')
        .pipe(imagemin())
        .pipe($.gulp.dest($.path.build + '/img'))
}
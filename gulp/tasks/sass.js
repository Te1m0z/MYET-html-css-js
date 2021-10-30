module.exports = () => {
    $.gulp.task('sass:dev', () => {
        return $.gulp.src('src/scss/index.scss')
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.csso())
            .pipe($.plugins.sass({ outputStyle: 'expanded' }))
            .pipe($.plugins.autoprefixer({
                grid: true,
                flexbox: true
            }))
            .pipe($.plugins.sourcemaps.write('./'))
            .pipe($.gulp.dest('src/css'))
            .pipe($.sync.stream())
    })

    $.gulp.task('sass:build', () => {
        return $.gulp.src('src/scss/index.scss')
            .pipe($.plugins.csso())
            .pipe($.plugins.sass({ outputStyle: 'compressed' }))
            .pipe($.plugins.autoprefixer({
                grid: true,
                flexbox: true
            }))
            .pipe($.plugins.rename('main.min.css'))
            .pipe($.gulp.dest('build/css'))
    })
}
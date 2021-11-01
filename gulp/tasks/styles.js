module.exports = () => {
    $.gulp.task('styles', () => {
        return $.gulp.src('src/static/scss/index.scss')
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.csso())
            .pipe($.plugins.sass({ outputStyle: 'compressed' }))
            .pipe($.plugins.autoprefixer({
                grid: true,
                flexbox: true
            }))
            .pipe($.plugins.concat('index.min.css'))
            .pipe($.plugins.sourcemaps.write('./'))
            .pipe($.gulp.dest($.path.build + '/css'))
            .pipe($.sync.stream())
    })
}
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import gulpIf from 'gulp-if'

export const scripts = () => {
    return $.gulp.src('src/static/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('common.min.js'))
        .pipe($.gulp.dest($.path.build + '/js'))
        .pipe(gulpIf(!$.isProd, $.browser.stream()))
}
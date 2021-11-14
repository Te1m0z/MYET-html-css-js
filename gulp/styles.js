import sourcemaps from 'gulp-sourcemaps'
import less from 'gulp-less'
import prefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import cleanCSS from 'gulp-clean-css'
import gulpIf from 'gulp-if'

export const styles = () => {
    return $.gulp.src('src/static/less/index.less')
        .pipe(gulpIf(!$.isProd, sourcemaps.init()))
        .pipe(less().on('error', (err) => console.log('error', err)))
        .pipe(gulpIf($.isProd, prefixer({
            grid: true,
            cascade: false,
        })))
        .pipe(concat('index.min.css'))
        .pipe(gulpIf($.isProd, cleanCSS({ compatibility: 'ie9', level: 2 })))
        .pipe(gulpIf(!$.isProd, sourcemaps.write('.')))
        .pipe($.gulp.dest($.path.build + '/css'))
        .pipe(gulpIf(!$.isProd, $.browser.stream()))
}
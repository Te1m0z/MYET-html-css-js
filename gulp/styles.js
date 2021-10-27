import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import gulpSass from 'gulp-sass'
import sass from 'sass'
import prefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean-css'
import sync from 'browser-sync'

const toSass = gulpSass(sass)

export const styles = () => {
    return gulp.src('src/scss/index.scss')
        .pipe(sourcemaps.init())
        .pipe(toSass({ outputStyle: 'compressed' }))
        .pipe(prefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ]
        }))
        .pipe(clean({
            level: 2
        }))
        .pipe(sourcemaps.write('../sourcemaps/'))
        .pipe(gulp.dest('build/css'))
        .pipe(sync.stream())
}
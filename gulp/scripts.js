import gulp from 'gulp'
import sync from 'browser-sync'
// import uglify from 'gulp-uglify-es'
import concat from 'gulp-concat'
import map from 'gulp-sourcemaps'

export const scripts = () => {
    return gulp.src([
        'src/js/**/*.js',
    ])
        .pipe(map.init())
        .pipe(concat('main.min.js'))
        .pipe(map.write('../sourcemaps'))
        .pipe(gulp.dest('src/js'))
        .pipe(sync.stream())
}
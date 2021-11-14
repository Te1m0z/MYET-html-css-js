import clear from 'gulp-clean'

export const clean = () => {
    return $.gulp.src($.path.build, { read: false }).pipe(clear({ force: true, allowEmpty: true }))
}
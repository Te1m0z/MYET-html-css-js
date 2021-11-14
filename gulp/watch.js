import * as tasks from './index.js'

export const watch = () => {
    $.gulp.watch('src/pug/**/*.pug', tasks.pug)
    $.gulp.watch('src/static/less/**/*.less', tasks.styles)
    $.gulp.watch('src/static/js/**/*.js', tasks.scripts)
    $.gulp.watch('src/static/assets/**/*.*', tasks.resources)
    $.gulp.watch('src/static/img/**/*.*', tasks.img)
    $.gulp.watch('src/static/libs/**/*.*', tasks.libs)
}
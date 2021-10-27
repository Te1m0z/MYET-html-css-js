import gulp from 'gulp'
import bs from 'browser-sync'
import { styles } from './gulp/styles.js'
import { scripts } from './gulp/scripts.js'
import { server } from './gulp/server.js'

const watching = () => {
    gulp.watch('src/scss/**/*.scss', styles)
    // gulp.watch(['!src/js/main.min.js', 'src/js/main.js'], scripts)
    gulp.watch('src/index.html').on('change', bs.reload)
}

export default gulp.parallel(
    styles,
    scripts,
    server,
    watching
)
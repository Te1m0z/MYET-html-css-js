import gulp from 'gulp'
import { styles } from './gulp/styles.js'

// const init = () => {
//     return gulp.series(
//         styles
//     )
// }

export default gulp.series(
    styles
)
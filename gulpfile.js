import gulp from 'gulp'
import browser from 'browser-sync'
// gulp tasks
import * as tasks from './gulp/index.js'

global.$ = {
    gulp: gulp,
    browser: browser.create(),
    path: {
        build: 'docs'
    },
    isProd: false
}

export default gulp.series(
    tasks.pug,
    tasks.styles,
    tasks.scripts,
    tasks.resources,
    tasks.img,
    gulp.parallel(
        tasks.watch,
        tasks.serve
    )
)

const toProd = (done) => {
    $.isProd = true
    done()
}

export const build = gulp.series(toProd, tasks.styles)
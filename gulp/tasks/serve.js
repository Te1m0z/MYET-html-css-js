module.exports = () => {
    $.gulp.task('serve', () => {
        $.sync.init({
            open: false,
            port: 5000,
            server: {
                baseDir: 'build',
                index: 'index.html'
            }
        })
    })
}
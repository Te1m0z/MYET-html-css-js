module.exports = () => {
    $.gulp.task('serve', () => {
        $.sync.init({
            open: false,
            port: 5000,
            server: {
                baseDir: $.path.build,
                index: 'index.html'
            }
        })
    })
}
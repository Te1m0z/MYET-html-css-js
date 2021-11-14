export const serve = () => {
    $.browser.init({
        open: false,
        port: 5000,
        server: {
            baseDir: $.path.build,
            index: 'index.html'
        }
    })
}
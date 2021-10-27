import sync, { notify } from 'browser-sync'

export const server = () => {
    sync.init({
        notify: true,
        open: false,
        port: 5000,
        server: {
            baseDir: 'src'
        }
    })
}
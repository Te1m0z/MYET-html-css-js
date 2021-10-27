let a = 10

const z = () => {
    a++
    return () => a--
}
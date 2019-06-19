function speedUp() {
    console.log(this)
    return `
        Sanket ${10 * 20}
    `
}

let spd = speedUp()
console.log(spd)

let spdArw = () => {
    console.log(this)
    return 'Sanket'+ 'Pawar'
}
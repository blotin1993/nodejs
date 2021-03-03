const { argv } = require("yargs")

const logica = (base) => {
    let resultado = ''

    for (let i = 1; i <= argv.l; i++) {
        resultado += `${base} * ${i} = ${base * i}\n`
    } 
    if (argv.v) {
        console.log(`${resultado}`.rainbow)
    }
    return resultado
}

const otrafuncion = () => {

}

module.exports = {
    logica,
    otrafuncion
}
const logica = (base) => {
    let resultado = ''

    for (let i = 0; i < 10; i++) {
        resultado += `${base} * ${i} = ${base * i}\n`
    } 

    return resultado
}

const otrafuncion = () => {

}

module.exports = {
    logica,
    otrafuncion
}
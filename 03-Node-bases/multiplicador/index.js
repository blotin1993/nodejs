
const fs = require('fs');
const {logica, otrafuncion} = require('./logica')

const multiplicar = (base) => {
    
    //fs.writeFileSync(`tablas/tabla-del-${base}`, logica(base))
    fs.writeFile(`tablas/tabla-del-${base}.txt`, logica(base), (err) => {
        if (err) throw err
        console.log('The file has been saved')
    })
}


module.exports = {
    multiplicar
}
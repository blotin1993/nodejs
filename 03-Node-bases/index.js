const colors = require('colors');
const argv = require('yargs')
    .option('b',{ 
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('v',{ 
        alias: 'visualizar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{ 
        alias: 'limite',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: 'Es el límite de el multiplicador.'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("La base tiene que ser un número.")
        } 
        return true
    })
    .help()
    .version()
    .argv
const {multiplicar} = require("./multiplicador")

// const base = 4

// multiplicar(base)
multiplicar(argv.b)
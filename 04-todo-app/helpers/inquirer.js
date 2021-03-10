const inquirer = require('inquirer')
require('colors')  // se puede usar asi(sin const) porque... 
const Choices = require('inquirer/lib/objects/choices');


//leer documentación inquirer

const inquirerMenu = async() =>  {
    console.log('====================='.blue)
    console.log('Select an option'.white)
    console.log('====================='.white)
    const menu = [
        {
            type: 'list',
            name: 'option',
            message: 'What to do?',
            choices: [
                {
                    value: 1,
                    name: `${'1-'.blue} Create task` //what?
                },
                {
                    value: 2,
                    name: `${'2-'.blue} Get tasks`
                },
                {
                    value: 0,
                    name: `${'X-'.blue} Salir`
                },
            ]
        }
]


    const {option} = await inquirer.prompt(menu)

    return option
}


const inquirerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message
        }
    ]

    const { description } = await inquirer.prompt(question)

    return description
}

module.exports = {
    inquirerMenu,
    inquirerInput,
}
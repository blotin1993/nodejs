const inquirer = require('inquirer')
require('colors')  // se puede usar asi(sin const) porque... 

//leer documentación inquirer

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
                value: 'X',
                name: `${'3-'.blue} Get tasks`
            },
        ]
    }
]

const inquirerMenu = async() =>  {
    console.log('====================='.blue)
    console.log('Select an option'.white)
    console.log('====================='.white)

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
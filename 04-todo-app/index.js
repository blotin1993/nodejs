const inquirer = require('inquirer')
const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const { getAllTasks, createTask } = require('./services/fileService')

const Task = require('./models/Task')
const TaskRepository = require('./repositories/TaskRepository')

const main = async() => {
    let option = ''

    do {
        option = await inquirerMenu()

        switch (option) {
            case 1:
                const title = await inquirerInput('Task title')
                createTask(title)
            break
            case 2:
                const allTasks = getAllTasks()
                console.log(allTasks)
                break
        }
    } while (option !== 0) {
        
    }

}

main()

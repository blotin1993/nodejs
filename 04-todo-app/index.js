const inquirer = require('inquirer')
const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const Task = require('./models/Task')
const TaskRepository = require('./repositories/TaskRepository')

const main = async() => {
    const taskRepository = new TaskRepository()

    do {
        let option = await inquirerMenu()
        switch (option) {
            case 1:
                const title = await inquirerInput('Task title')
                taskRepository.createTask(title)
            break
            case 2:
                const allTasks = taskRepository.getAllTasks()
                break
            case 'X':
            break
            default:
                break
        }
    } while (option !== 'X') {
        
    }

}

main()

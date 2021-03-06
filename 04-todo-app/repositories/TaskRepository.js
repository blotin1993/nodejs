const { saveData, getData } = require('../helpers/fileManager')
const Task = require('../models/Task')


//clase repositorio manipula base de datos 
class TaskRepository {
    _tasks = null //guion bajo -> privado
    
    constructor() {
        const data = getData();
        if(data){
            this._tasks = data;
        } else {
            this._tasks = [];
        }
    }

    getAllTasks() {
        return this._tasks
    }
    // @param {String} title
    // persistir datos en archivo
    // Return lista de tareas


    createTask(title) {
        const task = new Task(title)
        this._tasks.push(task)
        saveData(this._tasks)
    }

    deleteTask() {

    }

    completeTask() {

    }

}

module.exports = TaskRepository
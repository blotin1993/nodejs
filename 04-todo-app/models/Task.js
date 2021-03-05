const { uuid } = require('uuidv4');

class Task {
    id = ''
    title = ''
    done = null
    created = null
    finished = null

    constructor(title) {
        this.id = uuid() //TODO: asignar id
        this.title = title
        this.done = false
        created = new Date()

    }
}

module.exports = Task

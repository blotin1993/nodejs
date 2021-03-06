const fs = require('fs')

const name = './database/data.json'

const saveData = (data) => {
    fs.writeFileSync(name, JSON.stringify(data))
}

const getData = () => {

    if (!fs.existsSync()) {
        return null
    }
    const data = fs.readFileSync(name, {encoding: 'utf8'})

    if (!data) {
        return null
    }

    return JSON.parse(fs.readFileSync(name)) 

}

module.exports = {
    saveData,
    getData
}
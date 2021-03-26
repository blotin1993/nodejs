const config = require('../config')

class CityRepository {
    constructor() {
        this.limit = 10
        this.language = 'es'
        this.pathBase = ''
        this.apiKey = config.mapbox.apikey
    }

    findCities() {
        try {
            const instance = axios.create({
                baseURL: `${this.pathBase}`
            })
        }
        finally {
            
        }
    }
}

module.exports = CityRepository
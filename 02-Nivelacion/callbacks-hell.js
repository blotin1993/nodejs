const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Gonzalo'
    },
    {
        id: 3,
        nombre: 'Marian'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }
]

const getEmpleadoById = (id, callback) => {

    const empleado = empleados.find( (e) => e.id === id)

    if (empleado) {
        callback(null, empleado)
        return
    }
    callback(`El empleado con id ${id} no existe`)
}

const getSueldoById = (id, callback) => {
    
    const sueldo = sueldos.find( (s) => s.id === id)

    if (sueldo) {
        callback(null, sueldo)
        return
    }
    callback(`El sueldo no existe para el id ${id}`)
}

const id = 4

getEmpleadoById(id, (error, empleado) => {
    if(error) {
        console.log('Error!')
        console.log(error)
        return
    }

    getSueldoById(id, (error, sueldo) => {
        if(error) {
            console.log('Error!')
            console.log(error)
            return
        }
        console.log(`El empleado: ${empleado.nombre} tiene un sueldo de ${sueldo.sueldo}`)
    })
})
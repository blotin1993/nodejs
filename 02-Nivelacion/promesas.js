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

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id)

        if (empleado) {
            resolve(empleado)
            return
        }
        reject(`El empleado con id ${id} no existe`)
    }) 
}

const getSueldoById = (id, callback) => {

    return new Promise((resolve, reject) => {

    const sueldo = sueldos.find( (s) => s.id === id)

    if (sueldo) {
        resolve(sueldo)
        return
    }
    reject(`El sueldo no existe para el id ${id}`)
    })
}


const id = 2

getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado.nombre
        return getSueldoById(id)
    })

    .then(sueldo => {
        console.log(`El empleado con id ${id} es ${nombre} tiene un sueldo de ${sueldo.sueldo}`)
    })

    .catch(err => console.log(err))

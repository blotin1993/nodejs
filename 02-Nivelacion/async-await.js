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

const getEmpleadoById = async(id) => {
    try {
        //throw new Error()
        const empleado = empleados.find( (e) => e.id === id)
        if (empleado) {
            return empleado
        }
        throw new Error(`El empleado con id ${id} no existe`)
    } catch (error) {
        throw error
    }
}

const getSueldoById = async(id) => {
    try {
        //throw new Error()
        const sueldo = sueldos.find( (s) => s.id === id) //esto no lanza una excepción. No haría falta un try catch.
        if (sueldo) {
            return sueldo
        }
        throw new Error(`El sueldo con id ${id} no existe`)
    } catch (error) {
        throw error
    }
}
const id = 3

const getDatosCompletosEmpleado = async (id) => {
    const empleado = await getEmpleadoById(id)
    const sueldo = await getSueldoById(id)
    //console.log(`El empleado con id ${id} es ${empleado.nombre} y tiene un sueldo ${sueldo.sueldo}`)
    return {
        id,
        nombre: empleado.nombre,
        sueldo: sueldo.sueldo
    }
}

getDatosCompletosEmpleado(id)
    .then(data => console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo ${data.sueldo}`))
    .catch(err => console.log(err.message))

/*getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado.nombre
        return getSueldoById(id)
    })
    .catch(err => console.log(err))
*/

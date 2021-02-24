/*setTimeout(() => {
    console.log('Hola Mundo')
},2000)
*/
//callback es una función que se pasa como parámetro a otra función

setTimeout(() => {
    console.log('Hola Mundo')
},2000)

const saludar = () => {
    console.log('Hola Mundo')
}

setTimeout(saludar, 2000)
/*
const getUsuarioById = (id) => {

    const user = {
        id,
        nombre: 'Gonzalo'
    }
    
    setTimeout(() => {
        return console.log(user.nombre)
    },1000)

}
*/

/*const getUsuarioById = (id) => {

    const user = {
        id,
        nombre: 'Gonzalo'
    }
    
    setTimeout(() => {
        return user
    },1000)

}
const usuario = getUsuarioById(10)
console.log(usuario)  // esto devuelve undefined. */

const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Gonzalo'
    }
    
    setTimeout(() => callback(user),1000)

}

/*const imprimirUsuario = (usuario) => {
    console.log(usuario.nombre.toUpperCase())
}*/

getUsuarioById(10, ({nombre, id}) => {
    console.log(`Nombre ${nombre.toUpperCase()} - ID: ${id} test: ${20+20}`)
})






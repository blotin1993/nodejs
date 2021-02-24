const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescripcion() {
        return `${nombre} ${apellido} es ${profesion}` 
    }
}
/*
const nombre = personaje.nombre
const apellido = personaje.apellido
const profesion = personaje.profesion*/

//const {nombre, apellido, profesion, edad = 50} = personaje

const imprimirPersonaje = ({nombre, apellido, profesion, edad = 50}) => {
    console.log(nombre, apellido, profesion, edad)    
}

const personajes = ['Pepe', 'Moni', 'Coqui']

const p1 = personajes[0]
const p2 = personajes[1]
const p3 = personajes[2]
console.log(p1, p2, p3)

imprimirPersonaje(personaje)

//const[p1, p2, p3] = personajes
const[, , p3] = personajes

console.log(p3)


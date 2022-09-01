// Funciones - Hoisting (Se la puede declarar antes o despues de haberla llamado)

function sumar (op1, op2){
    let suma = op1 + op2;
    return suma;
}

let resultado = sumar(10,5);

console.log(resultado);


function saludo(){
    console.log('Hola Javi');
}

let nombre1 = 'David';
let nombre2 = 'Javi';

// Funciones Flecha

setTimeout( (nombre1, nombre2) =>{
    console.log('Hola ' + nombre1 + " " + nombre2)
} , 1500);


// Caracteristicas funciones flecha
// No se la puede reutilizar por que no tiene un nombre
// No dispone de hosting
// Cuando hay un parametro, ya no se utiliza los parentesis
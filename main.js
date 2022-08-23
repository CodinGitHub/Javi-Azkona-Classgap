let number = 10;

let array = ['aceite', 'arroz', 'tomate'];

// Acceder a los elementos
console.log(array[2]);

// Agregar elementos al final
array.push('cerveza');
console.log(array);

// Quitar elementos del final
array.pop();
console.log(array);

// Agregar elementos al inicio
array.unshift('cerveza');
console.log(array);

// Quitar elementos al inicio
array.shift('cerveza');
console.log(array);


let numberArray = [10, 20, 30, 40, 50, 60, 70];

for(let i =0; i< numberArray.length; i++){
    console.log(numberArray[i] + 3);
}
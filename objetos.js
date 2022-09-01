// let fruta = 'banana';
// let nombres = ['David', 'Javi', 'Maria'];

// let usuario = {
//     nombre: 'David',
//     apellido: 'Ruiz',
//     email: 'david@gmail.com',
//     edad: 38,
//     developer: true
// };

// usuario.address = 'Ecuador';

// console.log(usuario)

let array = [ 
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

function solution(array){
    let resultado = array.map(item => item.taxes = parseInt(item.price*0.19))
    return resultado;
}

// console.log(solution(array));

// ATRIBUTOS Y METODOS DE LOS OBJETOS

let producto1 = {
  nombre: 'zapatos',
  price: 50,
  cantidad: 2,
  calcularTotal(){
    return this.price * this.cantidad;
  }
}

let total = producto1.calcularTotal();

console.log(total)

// CLASES -> Constructor de objetos

class Product{
  constructor(name, price, cant){
    this.name = name;
    this.price = price;
    this.cant = cant;
  }
  calcularTotal(){
    return this.price * this.cantidad;
  }
} 

let producto2 = new Product('Teclado', 15, 3);
let producto3 = new Product('Monitor', 60, 2);

console.log(producto2)
//ACCEDER A ELEMENTOS
let tituloId = document.getElementById('title');
// let tituloClass = document.getElementsByClassName('encabezado');
// let tituloTag = document.getElementsByTagName('h2');

// let tituloId2 = document.querySelector('#title')
// let tituloClass2 = document.querySelectorAll('.encabezado')
// let tituloTag2 = document.querySelectorAll('h2')

//ESCUCHAR EVENTOS
let boton = document.getElementsByTagName('button')

boton[0].addEventListener('click', ()=>{
    //CAMBIAR ESTILOS
    tituloId.style.color = 'yellow';
    tituloId.style.width = '250px';
    tituloId.style.backgroundColor = 'black';
    tituloId.style.textAlign = 'left';
});

// IMPRIMIR UN NOMBRE INGRESADO POR INPUT EN PANTALLA
let enviarBtn = document.querySelector('#enviarBtn');

enviarBtn.addEventListener('click', ()=>{
    // Ver lo que hay en el input
    let input = document.querySelector('#input')
    console.log(input.value)
    // Imprimir/Mostrar en la pagina
})
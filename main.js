//Manipulación del DOM y Eventos

//Ejemplos 1 y 2 del PPT: 

//Ejemplo evento load
window.addEventListener('load', function() {
    console.log('Página cargada!')
});

//Ejemplo evento click en boton
const testButton = document.querySelector('button#test');

testButton.addEventListener('click', test);

function test() {
    console.log('Probando los eventos');
}

//Ejemplo 3: evento submit
const form = document.querySelector('form');

form.addEventListener('submit', submitHandlder);

function submitHandlder(e) {
    e.preventDefault();
    const message = document.querySelector('p#message');
    message.classList.add('show');
}


//LiveCoding

//1 - Detectar click y agregar/quitar clase en body
const btnCambiarFondo = document.querySelector('#cambiar-fondo');

btnCambiarFondo.addEventListener('click', cambiarFondo);

function cambiarFondo() {
    //luego mejorar con classList.toggle 
    document.body.classList.add('cambiar-fondo');
}


//2 - Detectar evento input y cambiar texto en párrafo
const testInput = document.querySelector('input#test');

testInput.addEventListener('input', function(e) {
    /* Ver en consola que el evento es un objeto también,
    *  explicar así cómo obtenemos el value del input.
    */
    //la función handler recibe como parámetro el evento que es representado como un objeto
    console.log(e);
    //la propiedad target del evento devuelve el elemento html que disparó el evento
    console.log(e.target);
    //así accedemos al atributo value del input
    console.log(e.target.value);

    //reemplazamos el texto del parrafo con el value del input
    document.querySelector('p.info').innerText = e.target.value;
});


/* 3 - Seleccionar todos los .menu-items, escuchar el evento click en todos
cuando se clickea un item, quitarle la clase "active" al elemento que la tiene
y colocarsela al que fue clickeado */

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach( function(item) {
    item.addEventListener('click', function() {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        this.classList.add('active');
    });
});

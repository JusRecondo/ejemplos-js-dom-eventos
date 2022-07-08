//Livecoding Clase 10

/* 
* 1- Escuchar evento click en boton y cambiar color de fondo del body, agregando clase css
* 2- Escuchar evento input en un input text, tomar ese texto y ponerlo en un parrafo
* 3- Detectar eventos en multiples elementos (lista de nodos). 
*    3a - Seleccionar todos los items del menu y guardar en constante
*    3b - Escuchar en todos los items el evento click con forEach()
*    3c - Agregar clase "active" al item seleccionado y quitar del anterior
**/


//Eventos

//Ejemplos 1 y 2 del PPT: eventos load y click
window.addEventListener('load', function() {
    console.log('Página cargada!')
});

const testButton = document.querySelector('button#test');

testButton.addEventListener('click', test);

function test() {
    console.log('Probando los eventos');
}

//Ejemplo 3 del PPT: evento submit
const form = document.querySelector('form');

form.addEventListener('submit', submitHandlder);

function submitHandlder(e) {
    e.preventDefault();
    const message = document.querySelector('p#message');
    message.classList.add('show');
}

//Livecoding

//1 - Detectar click y agregar/quitar clase
const btnCambiarFondo = document.querySelector('#cambiar-fondo');

btnCambiarFondo.addEventListener('click', cambiarFondo);

function cambiarFondo() {
    //luego mejorar con classList.toggle 
    document.body.classList.add('cambiar-fondo');
}


//2 - Detectar evento input y cambiar texto en párrafo
const testInput = document.querySelector('input#test');

testInput.addEventListener('input', function(e) {
    /* Mostrar en consola que el evento es un objeto también,
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

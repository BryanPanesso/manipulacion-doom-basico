const h1 = document.querySelector('h1');//document.querySelector toma la info que tiene esta etiqueta en el html
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({//de esta forma se puede ver en consola los elementos seleccionados
    h1,
    p,
    parrafito,
    pid,
    input

});

h1.innerHTML="Cambio <br>hola";//innerHTML cambia el contenido de la etiqueta seleccionada
h1.innerText="Cambio <br>hola";//innerText cambia el contenido de la etiqueta cuidando que no pongan codigo html
/* 
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'Rojo');//setAttribute cambia el atributo de la etiqueta seleccionada 
*/

h1.classList.add('Rojo');//classList.add añade una clase a la etiqueta seleccionada
h1.classList.remove('verde');//classList.remove quita una clase a la etiqueta seleccionada
//h1.classList.toggle('verde');//classList.toggle añade o quita una clase a la etiqueta seleccionada dependiendo de si la tiene o no
//h1.classlist.contains('verde');//classList.contains devuelve un booleano si la clase esta o no en la etiqueta seleccionada

input.value="Hola mundo";//value cambia el valor del input seleccionado

//console.log(document.createElement("img"));//document.createElement crea un elemento html

const img = document.createElement("img");
img.setAttribute("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
console.log(img);

pid.innerHTML="";//innerHTML cambia el contenido de la etiqueta seleccionada
pid.append(img);//append añade un elemento al final de la etiqueta seleccionada




/* const h1 = document.querySelector('h1');//document.querySelector toma la info que tiene esta etiqueta en el html
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){

    console.log("escuchando click");
    console.log(input1.value + input2.value);
    const result = parseInt(input1.value)+ parseInt(input2.value)
    
    pResult.innerText = "Resultado: " + result;

} */

//     addEventListener

const h1 = document.querySelector('h1');//document.querySelector toma la info que tiene esta etiqueta en el html
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//btn.addEventListener("click", btnOnClick);//addEventListener escucha un evento y ejecuta una funcion (en este caso el evento es click y la funcion es btnOnClick
form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event){

    console.log(event);
    event.preventDefault();//preventDefault previene que se recargue la pagina y no se alcance a ver lo que hace
    console.log("escuchando click");
    console.log(input1.value + input2.value);
    const result = parseInt(input1.value)+ parseInt(input2.value);//parseInt convierte un string en un numero
    
    pResult.innerText = "Resultado: " + result;

}
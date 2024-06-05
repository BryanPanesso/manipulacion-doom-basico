/* let nombre = "Juan";//cuando se declara una variable con let se puede cambiar su valor

nombre = "Pedro";

const apellido = "Perez";//cuando se declara una constante no se puede cambiar su valor

//apellido = "Gomez";//este fragmento de codigo da error, no se puede cambiar el valor de la variable const

//_______________________________________________

let suma=2+2;
console.log(suma);//console.log imprime en consola

let sumaString="hola, "+ "mundo";//concatenacion de strings
console.log(sumaString);

//_______________________________________________

//number es la forma de declarar un numero

//_______________________________________________

let nombre1 ="Juan";
let apellido1 ="Perez";
let username = "Juan";
let edad = 30;
let email = "juan@gmail.com";
let isMayorDeEdad = true;//utilizar el is antes del nombre de una variable booleana es una buena practica
let dineroAhorrado = 1000;
let deuda = 500;

//_______________________________________________

let nombreCompleto = nombre1 + " " + apellido1;
console.log(nombreCompleto);

let dineroReal = dineroAhorrado - deuda;
console.log(dineroReal);    

//_______________________________________________


function nombreCompleto1(name, lastName){

    return name + " " +lastName

}
console.log( nombreCompleto1("Bryan", "Panesso"));

//_______________________________________________

const name = "Bryan Steven";
const lastName = "Panesso Avila";
const completeName = name + " " + lastName;
const nickName = "Alpha";

console.log("Mi nombre es "+ completeName + ", pero prefiero que me digas " + nickName + ".");

function saludo(name, lastname,username){

    const completeName = nombreCompleto1(name, lastname);
    
    console.log("Mi nombre es "+ completeName + ", pero prefiero que me digas " + username + ".");

}

saludo("Santiago", "Gomez", "Santi");

//_______________________________________________



const tipoDeSuscripcion = "Basic"; 

switch(tipoDeSuscripcion){
    case "Free":
        console.log("Solo puedes tomar los cursos gratis"); 
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
} 

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion =="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion =="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("No tienes acceso a los cursos de Platzi");
} */

//_______________________________________________

//Ciclos
/* 
for (let i = 0; i <= 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i =0;

while (i <= 5){
    console.log("El valor de i es: " + i);
    i++;
}


let respuesta;
while(respuesta != 4){
    let pregunta = prompt('cuanto es 2 + 2')
    respuesta = pregunta;
    }
 */
//_______________________________________________

//Arrays y objetos
/* 
const array=[1,"hola",true,4.5];//definicion de un array
console.log(array);

const obj={//definicion de un objeto con sus propiedades

    nombre:"Bryan",
    apellido:"Panesso",
    edad:30,
    isEstudiante:true,
    cursos:["JavaScript","React","Python"]

}

console.log(obj);


function imprimmirPrimerElementoArray(array){//funcion para imprimir elementos de un array

    console.log(array[1]);

}

imprimmirPrimerElementoArray(array);


function imprimirElementoPorElemento(array){//funcion para imprimir elementos de un array uno por uno

    for(let i=0; i<array.length; i++){

        console.log(array[i])

    }

}

imprimirElementoPorElemento(array);

function imprimirElementoPorElementoObjeto(obj){//funcion para imprimir elementos de un objeto uno por uno

    const arr = Object.values(obj);
    for(let i=0; i<arr.length; i++){

        console.log(arr[i])

    }

}

imprimirElementoPorElementoObjeto(obj);

 */
//_______________________________________________

//BONUS REDUCCION DE CONDICIONALES
/* 
function conseguirTipoSuscripcion(tipoDeSuscripcion){//funcion para reducir condicionales
if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
if(tipoDeSuscripcion =="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
}
if(tipoDeSuscripcion =="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
}

    console.warn("No tienes acceso a los cursos de Platzi");
}

conseguirTipoSuscripcion("Free");

//_______________________________________________

const tiposDeSuscripciones={
    free:"Solo puedes tomar los cursos gratis",
    basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert:"Puedes tomar casi todos los cursos de Platzi durante un año"
};

tiposDeSuscripciones.free;
tiposDeSuscripciones["expert"];

function conseguirTipoSuscripcion1(suscripcion){

    if(tiposDeSuscripciones[suscripcion]){

        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("No tienes acceso a los cursos de Platzi");

}

conseguirTipoSuscripcion1("basic");
 */

//_______________________________________________


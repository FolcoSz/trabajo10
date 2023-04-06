// 1-Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.
// (Con lista desordenada se refiere al elemento HTML, pero deben mostrarlos
//  ORDENADOS en un elemento UL en el HTML, como el ejercicio final del TP5)

const numeros = [];

let numero;
let min = 1;
let max = 10;

let lista = document.createElement("ul");
for(let i=0;i<10;i++)
{
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.push(numero);
    
    let itemLista = document.createElement("li");
    itemLista.textContent = numero;
    lista.appendChild(itemLista);
    document.body.appendChild(lista);
}
console.log(numeros);

////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// a. Obtener aquellos nombres con al menos 6 letras.
// b. Obtener los nombres que comienzan con "M".
// c. Ordenar alfabéticamente y mostrar por consola.
// d. Generar un array que contenga solo las iniciales
// e. Ejemplo: ["F", "L", "E", "M",... ].
// f. Generar un array que contenga todos los nombres en mayúscula.
// g. Queremos saber si alguno de estos nombres comienza con "J”

const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
let puntoA = nombres.filter(nombre => nombre.length > 6);
let puntoB = nombres.filter(nombre => nombre.startsWith("M"));
let puntoC = nombres.sort();
let puntoD = nombres.map(nombre => nombre.charAt(0));
let puntoF = nombres.map(nombre => nombre.toUpperCase());
let puntoG = nombres.some(nombre => nombre.charAt(0) === 'J');

const arrayD = [];
const arrayF = [];

puntoD.forEach(inicial => {
  arrayD.push(inicial);
});

puntoF.forEach(mayusculas => {
    arrayF.push(mayusculas);
  });

console.log(puntoA);
console.log(puntoB);
console.log(puntoC);
console.log(arrayD);
console.log(arrayF);
console.log(puntoG);

////////////////////////////////////////////////////////////////////////////////////////////////////

// 9-Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo
// en base a sus índices

function intercambiar(array, var1, var2) {

    let aux = array[var1];
  
    array[var1] = array[var2];
    array[var2] = aux;
  
    return array;
}
const elementos = [1, 2, 3, 4, 5];
let cambiados = intercambiar(elementos, 1, 2);

console.log(cambiados);

////////////////////////////////////////////////////////////////////////////////////////////////////

// 13-Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un
//  div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
//  rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
//  fuente

function cambiarTamano(nombreClase) {
  let tamano = document.getElementsByClassName(nombreClase)[0];
  if (tamano.style.fontSize == "20px") {
    tamano.style.fontSize = "16px";
  } else {
    tamano.style.fontSize = "20px";
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// 17-Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha

function cambiarColor(casilla) {
  if (casilla.style.backgroundColor != 'yellow')
  {
    casilla.style.backgroundColor = 'yellow';
  }
  else
  {
    casilla.style.backgroundColor = 'white';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// 21-Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página
// referida con console.log (utilicen el e.preventDefault, lo mostramos en clase varias veces,
// por ejemplo para hacer que no se recargue la pagina, después tienen que traer el elemento
// link, el cual debe tener un ID y lo muestran utilizando la forma
// “console.log(variableLinkQueGuardaron.href)”)

function funcionEnlace(e)
{
  e.preventDefault();
  let enlace = document.getElementById("enlace");
  console.log(enlace.href);
}
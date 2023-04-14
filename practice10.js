//2. Dado el array = [1,2,3,4,5,6]
//a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
let arr=[1, 2, 3, 4, 5, 6];
let i=0;
while (i<arr.length) {
  console.log(arr[i]);
  i++;
}
//b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
arr=[1, 2, 3, 4, 5, 6];
for (let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}
//c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
arr=[1, 2, 3, 4, 5, 6];
arr.forEach(numero => console.log(numero));
//d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
arr=[1, 2, 3, 4, 5, 6];
for (let i=0; i<arr.length; i++) {
  arr[i]+=1;
}
console.log(arr);
//e. Generar una copia de un array pero con todos los elementos incrementados en 1.
arr=[1, 2, 3, 4, 5, 6];
let newArr=arr.map(numero => numero+1);
console.log(nuevoArr);
//f. Calcular el promedio
arr=[1, 2, 3, 4, 5, 6];
let sum=arr.reduce((num1, num2) => num1+num2, 0);
let promedio=sum/arr.length;
console.log(promedio);

//6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
let colores=["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUsuario=prompt("Introduce un color:");
if (colores.includes(colorUsuario)) {
  console.log(`El color ${colorUsuario} está en el array`);
} else {
  console.log(`El color ${colorUsuario} no está en el array`);
}

//10. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo cuando sea presionada con el mouse.

//14. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el contenido de la primera tabla, dejando intacto el de la segunda.
function cambiarContenido() {
    var tabla1 = document.getElementById("tabla1");
    var celdasTabla1 = tabla1.getElementsByTagName("td");
    for (var i = 0; i < celdasTabla1.length; i++) {
      celdasTabla1[i].innerHTML = "-";
    }
  }

//Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla cuando ingresamos con el mouse y regresar al original cuando salimos.  
var celdas=document.getElementsByTagName("td");
      for (var i=0; i < celdas.length; i++) {
        celdas[i].addEventListener("mouseenter", function () {
          this.style.backgroundColor = "yellow";
        });
        celdas[i].addEventListener("mouseleave", function () {
          this.style.backgroundColor = "";
        });
      }

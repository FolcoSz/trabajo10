//3-Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al
//cuadrado.

array = [1, 2, 3, 4, 5, 6];

(range(len(array)));
    array[i] = array[i] ** 2;

print(array)

/////////////////////////////////////////////////////////
//7-Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares 
//(Recuerda que ((numero % 2) == 0) determina si un numero es par o no, si tiene el resultado ==0 es par, sino es impar)

(obtener_pares(numeros));
    pares = []
    (for numero in numero);
        if (numero % 2 == 0);
            pares.append(numero)
    return pares

///////////////////////////////////////////////////////

//11-Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona.
function ocultar(elemento) {
  elemento.style.display = "none";
}

/////////////////////////////////////////////////////

//15-Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres botones
//que permitan fijar distintos hipervínculos para la propiedad href. Además actualizar el texto del
//hipervínculo.

function cambiarHref(nuevoHref) {
    var miHipervinculo = document.getElementById("miHipervinculo");
    miHipervinculo.href = nuevoHref;
    miHipervinculo.textContent = "Ir a " + nuevoHref;
  }

///////////////////////////////////////////////////
//19-Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250 píxeles y si
//se hace doble clic nuevamente retornar al tamaño 800 x 70.

const div = document.getElementById("myDiv");
  let isResized = false;

  addEventListener("dobleclick", function() {
    if (isResized) {
      width = "800px";
      height = "70px";
      isResized = false;
    } else {
      width = "250px";
      height = "250px";
      isResized = true;
    }
  });

  //////////////////////////////////////////////


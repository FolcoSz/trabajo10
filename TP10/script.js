// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.
let numero=new Array (-4, 12, 0, -3, 29, -150)

function sumarPositivos(numero) {
    
    let contador=0;
    
    for (let i=0; i<numero.length; i++){
        if (numero[i] > 0) {
            contador=contador+numero[i]
        }
    }
    return contador;
} console.log(sumarPositivos(numero))

// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.
function palabrasConVocal(arreglo) {
    const vocales=new Set(['a', 'e', 'i', 'o', 'u']);
    const resultado=[];
    for (let i = 0; i<arreglo.length; i++) {
      const palabra=arreglo[i];
      if (vocales.has(palabra[0].toLowerCase())) {
        resultado.push(palabra);
      }
    }
    return resultado;
  }

  //12. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color de fondo de cada fila de la primera tabla cuando sea presionada con el mouse (en lugar de tabla pueden usar otra estructura que les parezca mientras siga el ejemplo)

  //16. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego cuando sean presionadas ocultarlas.
  function ocultarPalabra(evento) {
    if (evento.target.tagName === 'STRONG') {
      evento.target.style.display = 'none';
    }
  }

  //20. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página referida con console.log (utilicen el e.preventDefault, lo mostramos en clase varias veces, por ejemplo para hacer que no se recargue la pagina, después tienen que traer el elemento link, el cual debe tener un ID y lo muestran utilizando la forma “console.log(variableLinkQueGuardaron.href)”)
  function manejarClick(evento) {
    evento.preventDefault();
    var link = evento.target;
    console.log(link.href);
  }
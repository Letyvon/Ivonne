// Escribir codigo para ordenar de forma ascendente un arreglo de números
// utilizando el algoritmo Bubble Short

/* Se Compara el primer elemento del arreglo con el siguiente elemento.
Si el primer elemento es mayor que el segundo, los intercambia.
Luego, compara el segundo elemento con el tercero, y así sucesivamente hasta el final del arreglo.repitiendo
el  proceso con  cada elemento del arreglo, excepto el último, ya que con cada iteración del bucle exterior, el mayor elemento “burbujea” hasta el final del arreglo.
El bucle continúa hasta que no se necesiten más intercambios, lo que significa que el arreglo está ordenado.*/

let arreglo = [89, 10, 2, 50, 87, 3, 5];
    let n = arreglo.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (arreglo[j] > arreglo[j+1]) {
          // Intercambiar arr[j+1] y arr[j]
          let temp = arreglo[j];
          arreglo[j] = arreglo[j+1];
          arreglo[j+1] = temp;
        }
      }
    }

    console.log(arreglo);
    
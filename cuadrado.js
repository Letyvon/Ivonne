
    // Imprimir cuadro ascendente
    for (let i = 1; i <= 5; i++) {
      let cuadrado = ' ';
      for (let j = 1; j <= 5; j++) {
       // row += i * j + ' ';
        cuadrado += i  + ' ';
      }
      console.log(cuadrado);
    }
    
    console.log(''); // Espacio entre los cuadros
    
    // Imprimir cuadro descendente
    for (let i = 5; i >= 1; i--) {
      let cuadrado = '';
      for (let j = 5; j >= 1; j--) {
        cuadrado += i  + ' ';
      }
      console.log(cuadrado);
    }

  
  // Ejemplo de uso:
  

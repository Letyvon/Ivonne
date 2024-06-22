function printSquarePattern(number) {
    // Imprimir cuadro ascendente
    for (let i = 1; i <= number; i++) {
      let row = ' ';
      for (let j = 1; j <= number; j++) {
       // row += i * j + ' ';
        row += i  + ' ';
      }
      console.log(row);
    }
    
    console.log(''); // Espacio entre los cuadros
    
    // Imprimir cuadro descendente
    for (let i = number; i >= 1; i--) {
      let row = '';
      for (let j = number; j >= 1; j--) {
        row += i  + ' ';
      }
      console.log(row);
    }
  }
  
  // Ejemplo de uso:
  printSquarePattern(5);
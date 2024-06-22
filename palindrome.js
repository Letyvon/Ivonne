function Palindrome(string) {
    
    // Comparamos la cadena normalizada con su versión invertida.
    var stringReverse = string.split('').reverse().join('');

    // Devolvemos true si las cadenas son iguales.
    return string === stringReverse;
}

var frase = 'hola';
if (Palindrome(frase)) {
    console.log("La frase es un palindromo ");
}else {
    console.log("La frase no es palindormo ");
}



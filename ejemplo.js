function isPalindrome(string) {
    // Normalizamos el texto, convirtiéndolo a minúsculas y eliminando caracteres no alfanuméricos.
    var normalizedString = string.toLowerCase().replace(/[^\w]/g, '');

    // Comparamos la cadena normalizada con su versión invertida.
    var reversedString = normalizedString.split('').reverse().join('');

    // Devolvemos true si las cadenas son iguales.
    return normalizedString === reversedString;
}

// Ejemplo de uso
var fraseUsuario = "Anita lava la tina";
if (isPalindrome(fraseUsuario)) {
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}
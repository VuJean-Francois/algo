function convertirTemp(celsius) {
    const fahren = (celsius*9/5)+32;
    return fahren;
}
// Demande à l'utilisateur de saisir un temp
const tempCelsius = parseFloat(prompt("Entrez une Température en degré celsius :"));

// Conversion de la temp
const conversion = convertirTemp(tempCelsius);

console.log(tempCelsius + " degrés Celsius est égale à "+conversion+"degrés Fahrenheit");


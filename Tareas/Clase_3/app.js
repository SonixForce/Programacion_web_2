// Variables
let nombre = prompt("Escribe tu nombre: ");
let edad = prompt("Escribe tu edad: ");
let peso = prompt("Escribe tu peso: ");
let estatura = prompt("Escribe tu estatura: ");
let masaCorp = parseFloat(peso) / parseFloat(estatura)^2;

console.log("Tus datos son los siguientes: \n" + "Nombre: " + nombre + "\n" + "Edad: " + edad + "\n" + "Peso: " + peso + "\n" + "Estatura: " + estatura + "\n" + "Índice de masa corporal: " + masaCorp + "\n");
let numero = parseInt(prompt("Introduce el número de x a imprimir:"));
let letra = 'x';
let resultadoHorizontal = '';
let resultadoVertical = '\n';

while (numero > 0) {
    resultadoHorizontal += letra + ' ';
    resultadoVertical += letra + '\n';
    numero--;
}
console.log(resultadoHorizontal + resultadoVertical);
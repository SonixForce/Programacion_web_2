let numeroDesc = 5;
let numeroOg = 5;
let letraHor = '-';
let letraVer = '|';
let resultadoHorizontal = '';
let resultadoVertical = '\n';

while (numeroDesc > 0) {
    resultadoHorizontal += letraHor + ' ';
    resultadoVertical += letraVer + ' '.repeat(numeroOg + 2) + letraVer + '\n';
    numeroDesc--;
}

console.log(resultadoHorizontal + resultadoVertical + resultadoHorizontal);
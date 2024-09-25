let numeroBase = 1;
let numeroAMultiplicar = 1;
let numeroMultiplicado = 1;
let resultado = '';

while (numeroBase < 11 && numeroAMultiplicar <= 10) {
    //console.log('Tabla de multiplicar de: ' + numeroBase);

    numeroMultiplicado = numeroBase * numeroAMultiplicar;
    
    resultado += numeroBase + ' * ' + numeroAMultiplicar + ' = ' + numeroMultiplicado + '\n';
    numeroBase++;

    if (numeroBase == 11) {
        numeroAMultiplicar++;
        numeroBase = 1;
        resultado += '\n\n'
    }
}

console.log(resultado);
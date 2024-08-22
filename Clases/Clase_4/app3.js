// Variables
let dato1 = 0, dato2 = 0, resultadoAND, resultadoOR;

// Comprobación AND
resultadoAND = dato1 == dato2 && dato1 != 0 && dato2 != 0;

// Comprobación OR
resultadoOR = dato1 == dato2 && dato1 != 0 && dato2 != 0 || dato1 > dato2 || dato1 < dato2;

console.log("Compuerta AND: " + resultadoAND);
console.log("Compuerta OR: " + resultadoOR);
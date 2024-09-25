// Función para generar un número aleatorio entre un rango determinado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para pedir al usuario que adivine un número
function pedirAdivinanza() {
    return prompt(`Adivina el número secreto entre 1 y 10. Tienes 3 intentos:`);
}

// Función para verificar si el número es correcto
function verificarAdivinanza(adivinanza, numeroAleatorio) {
    return parseInt(adivinanza) === numeroAleatorio;
}

// Función principal del juego
function jugar() {
    const numeroAleatorio = generarNumeroAleatorio(1, 10);
    let vidas = 3;
    let numeroEncontrado = false;

    while (vidas > 0 && !numeroEncontrado) {
        let numeroAdivinado = pedirAdivinanza();

        if (verificarAdivinanza(numeroAdivinado, numeroAleatorio)) {
            alert("¡Felicidades! Encontraste el número.");
            numeroEncontrado = true;
        } else {
            vidas--;
            if (vidas > 0) {
                alert(`Número incorrecto, te quedan ${vidas} vidas.`);
            } else {
                alert("Perdiste el juego :(");
            }
        }
    }
}

// Ejecutar el juego
jugar();

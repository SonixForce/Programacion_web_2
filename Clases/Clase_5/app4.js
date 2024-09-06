// El usuario tiene que adivinar un numero generado de manera aleatoria
// El usuario tendrá una cantidad limitada de vidas para adivinarlo, cada vez que se equivoque perderá una vida

let numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
let vidas = 3;
let numeroEncontrado = false;
let numeroAdivinado = prompt(`Ahora mismo, hay un número secreto aleatorio entre el 1 al 10, tienes que adivinarlo.
Solamente tienes 3 intentos`);

console.log(numeroAleatorio);

while (vidas > 0 && numeroEncontrado == false) {
    switch (numeroAdivinado) {
        case "1":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "2":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "3":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "4":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "5":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "6":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "7":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "8":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "9":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
        case "10":
            if (parseInt(numeroAdivinado) == numeroAleatorio) {
                alert("¡Felicidades encontraste el número!");
                numeroEncontrado = true;
                break;
            }
            else {
                vidas--;
                alert("Número incorrecto, te quedan " + vidas + " vidas");
                numeroAdivinado = prompt("Introduce tu nuevo intento: ")
                break;
            }
    }
}
if (vidas == 0) {
    alert("Perdiste el juego :(")
}
// Inicio de un arreglo para el almacén de productos en el carrito
let carrito = [];

producto = {
    nombre: '',
    precio: 0
}

// Función para mostrar nuestro menú
function mostrarMenu() {
    return parseInt(prompt(`
            "Seleccione un producto a añadir al carrito"
            1.- Camisa - $300
            2.- Pantalón - $500
            3.- Zapatos - $800
            4.- Sombrero - $200
            5.- Ver carrito y total
            6.- Salir del programa
        `));
}

// Función para ver el carrito agrupado por productos
function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");

    } else {
        let productosAgrupados = {};
        let total = 0;

        // Agrupamos los productos en el carrito
        carrito.forEach((producto) => {
            if (productosAgrupados[producto.nombre]) {
                productosAgrupados[producto.nombre].cantidad++;
                productosAgrupados[producto.nombre].total += producto.precio;
            } else {
                productosAgrupados[producto.nombre] = {
                    cantidad: 1,
                    total: producto.precio
                };
            }
        });

        // Mostrar los productos agrupados
        let mensaje = "Carrito de compras\n";
        for (let producto in productosAgrupados) {
            mensaje += `${producto}: Cantidad ${productosAgrupados[producto].cantidad}, Total: $${productosAgrupados[producto].total}\n`;
            total += productosAgrupados[producto].total;
        }

        alert(mensaje + `\n En total tu carrito cuesta: $${total}`);
    }
}

// Función para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                producto = {
                    nombre: 'Camisa',
                    precio: 300
                }
                carrito.push(producto);
                alert("Producto agregado con éxito");
                break;
            case 2:
                producto = {
                    nombre: 'Pantalón',
                    precio: 500
                }
                carrito.push(producto);
                alert("Producto agregado con éxito");
                break;
            case 3:
                producto = {
                    nombre: 'Zapatos',
                    precio: 800
                }
                carrito.push(producto);
                alert("Producto agregado con éxito");
                break;
            case 4:
                producto = {
                    nombre: 'Sombrero',
                    precio: 200
                }
                carrito.push(producto);
                alert("Producto agregado con éxito");
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente");
        }
    }
    alert("Programa Finalizado");
}

iniciarPrograma();

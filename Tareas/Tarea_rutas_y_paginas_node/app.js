const express = require("express"); // Importar Express
const path = require("path");
const app = express(); // Crea una instancia de Express
const port = 3056; // Define el puerto en el que se ejecutará el servidor
const routes = require("./routes/server"); // Importa las rutas desde server.js

// Configura Express para servir archivos estáticos desde la carpeta 'routes'
app.use(express.static(path.join(__dirname, 'routes')));

app.use("/", routes); // Usa las rutas definidas en server.js

app.listen(port, () => {
    console.log(`Servidor en escucha desde http://localhost:${port}`);
});
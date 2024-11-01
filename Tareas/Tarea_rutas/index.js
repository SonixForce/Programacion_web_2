// index.js
const express = require('express');
const app = express();
const PORT = 5010;

// Configura el middleware para servir archivos estáticos desde 'public'
app.use(express.static('public'));

// Importa las rutas desde routes/pages.js
const pageRoutes = require('./routes/pages');

// Usa las rutas de pages.js
app.use('/', pageRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

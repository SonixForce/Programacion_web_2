const express = require('express'); // Importar Express
const path = require('path');
const router = express.Router(); // Crea una instancia del router

// Pagina principal de bienvenida
router.get('/', (req, res) => {
    res.redirect('/Bienvenida');
});

// Define la ruta GET para 'Bienvenida'
router.get('/Bienvenida', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define la ruta GET para 'Conocenos'
router.get('/Conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, 'conocenos.html')); 
});

// Define la ruta GET para 'Sobre_el_proyecto'
router.get('/Sobre_el_proyecto', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre_el_proyecto.html')); 
});

module.exports = router; // Exporta el router
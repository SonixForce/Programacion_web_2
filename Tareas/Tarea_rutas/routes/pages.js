// routes/pages.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta para la página de bienvenida
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Ruta para la página de calculadora
router.get('/calculadora', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

// Ruta para la página de generador de códigos QR
router.get('/generador-qr', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'generador_qr.html'));
});

module.exports = router;

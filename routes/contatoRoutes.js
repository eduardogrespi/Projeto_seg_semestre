// routes/contatoRoutes.js
const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

// Rota para envio do formulário
router.post('/enviar-contato', contatoController.enviarContato);

module.exports = router;


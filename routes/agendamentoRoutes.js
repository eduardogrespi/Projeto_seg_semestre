const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

// Rota para processar o formulário de agendamento
router.post('/', agendamentoController.agendar);

module.exports = router;
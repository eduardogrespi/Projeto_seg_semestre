// routes/agendamentoRoutes.js
const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/agendar-tratamento', agendamentoController.agendar);

module.exports = router;

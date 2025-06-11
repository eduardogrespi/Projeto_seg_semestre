// controllers/agendamentoController.js
const AgendamentoModel = require('../models/agendamentoModel');

function agendar(req, res) {
    const { nome, email, telefone } = req.body;

    AgendamentoModel.salvarAgendamento(nome, email, telefone, (err) => {
        if (err) {
            console.error('Erro ao agendar:', err.message);
            res.status(500).send('Erro ao agendar tratamento.');
        } else {
            res.send('<h2>Agendamento realizado com sucesso!<br><a href="tratamentos.html">Voltar</a></h2>');
        }
    });
}

module.exports = { agendar };

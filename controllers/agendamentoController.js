const AgendamentoModel = require('../models/agendamentoModel');

function agendar(req, res) {
    const { nome, email, telefone, data_agendamento, hora, tratamento } = req.body;

    AgendamentoModel.salvarAgendamento(nome, email, telefone, data_agendamento, hora, tratamento, (err) => {
        if (err) {
            console.error('Erro ao agendar:', err.message);
            res.status(500).send('Erro ao agendar tratamento.');
        } else {
            res.send(`
                <h2>Agendamento realizado com sucesso!</h2>
                <p>Tratamento: ${tratamento}</p>
                <p>Data: ${data_agendamento} às ${hora}</p>
                <a href="/tratamentos.html">Voltar</a>
            `);
        }
    });
}

module.exports = { agendar };
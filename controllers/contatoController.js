// controllers/contatoController.js
const ContatoModel = require('../models/contatoModel');

function enviarContato(req, res) {
    const { nome, email, mensagem } = req.body;

    ContatoModel.salvarContato(nome, email, mensagem, (err) => {
        if (err) {
            console.error('Erro ao salvar contato:', err.message);
            res.status(500).send('Erro ao enviar mensagem.');
        } else {
            res.send('<h2>Mensagem enviada com sucesso!<br><a href="faleconosco.html">Voltar</a></h2>');
        }
    });
}

module.exports = { enviarContato };

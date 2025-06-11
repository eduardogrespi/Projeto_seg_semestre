// models/agendamentoModel.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, '../db/banco.db'), (err) => {
    if (err) console.error('Erro ao conectar ao banco:', err.message);
});

function salvarAgendamento(nome, email, telefone, callback) {
    db.run(
        'INSERT INTO agendamentos (nome, email, telefone) VALUES (?, ?, ?)',
        [nome, email, telefone],
        callback
    );
}

module.exports = { salvarAgendamento };

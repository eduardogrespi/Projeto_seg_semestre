// models/contatoModel.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conexão com o banco de dados
const db = new sqlite3.Database(path.join(__dirname, '../db/banco.db'), (err) => {
    if (err) console.error('Erro ao conectar ao banco de dados:', err.message);
});

function salvarContato(nome, email, mensagem, callback) {
    db.run(
        'INSERT INTO contato (nome, email, mensagem) VALUES (?, ?, ?)',
        [nome, email, mensagem],
        callback
    );
}

module.exports = { salvarContato };

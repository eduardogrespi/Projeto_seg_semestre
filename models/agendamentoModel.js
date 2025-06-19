const mysql = require('mysql2');
const db = require('../db/bd'); // Usando a mesma conexão MySQL

function salvarAgendamento(nome, email, telefone, data_agendamento, hora, tratamento, callback) {
    const sql = `
        INSERT INTO agendamentos 
        (nome, email, telefone, data_agendamento, hora, tratamento) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    db.query(sql, [nome, email, telefone, data_agendamento, hora, tratamento], callback);
}

module.exports = { salvarAgendamento };
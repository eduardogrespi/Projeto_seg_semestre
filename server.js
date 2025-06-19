const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const agendamentoRoutes = require('./routes/agendamentoRoutes');
// Removi contatoRoutes já que não foi fornecido e pode não ser relevante

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Adicionei para lidar com JSON
app.use(express.static(__dirname));

// ROTAS
app.use('/agendamentos', agendamentoRoutes); // Prefixo mais organizado

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
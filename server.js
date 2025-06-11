const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const contatoRoutes = require('./routes/contatoRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// ROTAS
app.use('/', contatoRoutes);
app.use('/', agendamentoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

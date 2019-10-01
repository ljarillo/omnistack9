const express = require('express');
const routes = require('./routes');

const app = express();

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (Criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
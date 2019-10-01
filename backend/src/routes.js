const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;

//MINUTO 30:57

//yarn dev - para rodar o servidor na localhost:3333
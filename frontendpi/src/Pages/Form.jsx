// api-cadastro.js

const express = require('express');
const app = express ();
const cadastro = [];

app.use(require("cors")());
app.use(express.json());

app.get('/',(req, res, next) => {
    resp.json(cadastros);
})

app.post('/cadastro', (req, res, next) => {
    console.log("cadastro recebido!");
    //salva no banco de dados

    cadastros.push({
        nome: req.body.txtNome,
        idade: parseInt(req. body. txtIdade),
        uf: req.body.cmbUF
    });
    resp.json({message:"Tudo ok por aqui!", dados: cadastros});
})

app.listen(3001, () => console.log("Servidor escustando na porta 3001..."));
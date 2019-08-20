// Importando o express que é uma função 
const express = require('express');
const mongoose = require ('mongoose');
const cors =  require('cors');

const routes = require ('./routers');

const server = express();
// API REST com os metodos
// GET buscar informação ,
// POST criar algum tipo de registro, 
// PUT para editar o registro, 
// DELETE para poder deleter o registro,


// chamando a conexao com o banco de dados.
mongoose.connect ('mongodb+srv://omnistak:omnistak@cluster0-ynxlp.mongodb.net/omnistak8?retryWrites=true&w=majority',
    {useNewUrlParser: true}
);

server.use(cors()); // função para navegar em qualquer lugar
server.use(express.json());
server.use (routes);


// qual porta será utilizada
server.listen(3333);



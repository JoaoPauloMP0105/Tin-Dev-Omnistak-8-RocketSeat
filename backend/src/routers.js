const express = require ('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router ();

// função com modelo arion function
// Função que faz a requisição e tras a resposta

//    exemplo de rota POST para criar algo dentro da aplicação
 //   so ira funcionar se estiver em um formulario
 routes.get('/devs', DevController.index);
 routes.post('/devs', DevController.store);  

 routes.post('/devs/:devId/likes', LikeController.store);
 routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;

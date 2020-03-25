const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
  Métodos Http:

  GET: Buscar uma informação do back-end
  POST: Criar uma informação do back-end
  PUT: Alterar uma informação do back-end
  DEKETE: Deletar uma informação do back-end
*/

/*
  Tipos de parâmetros:

  Query Params: Parametros nomeados enviados na rota apos o simbolo de ? (Filtors,paginação)
  Route Params: Parametros utilizado para identificar recursos
  Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

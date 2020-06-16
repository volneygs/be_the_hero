const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * informar a aplicação que as requisições virão em json
 */
app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(8080); 
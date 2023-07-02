const express = require('express');
const connDB = require('./config/db');
const cors = require("cors");

const app = express();

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(cors());

connDB();

app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

app.listen(4000, () => {
    console.log('Server is running')
})
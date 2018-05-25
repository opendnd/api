require('dotenv').config();
const swaggerConfig = require('../swagger');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const logger = require('./logger');
const PORT = process.env.PORT || 3000;

// middleware
const app = express();
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

// routes
routes.setup(app);

// listen
app.listen(PORT, () => logger.info(`Microservice listening on port ${PORT}`));

module.exports = app;

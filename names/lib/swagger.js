require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pinfo = require('../package');
const { title, version, description } = pinfo;
const Swagger = require('express-swagger-generator'); // eslint-disable-line import/no-extraneous-dependencies
const app = require('./index');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const expressSwagger = Swagger(app);

// swagger config
const swaggerConfig = expressSwagger({
  swaggerDefinition: {
    info: {
      title,
      version,
      description,
    },
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    security: [
      {
        jwt: [],
      },
    ],
    host: `${HOST}:${PORT}`,
  },
  basedir: __dirname,
  files: ['./routes.js'],
});

const swaggerJSON = JSON.stringify(swaggerConfig, null, 2);
const filepath = `${path.join(__dirname, '..')}/swagger.json`;

process.stdout.write(`Writing swagger to ${filepath}...\n`);

fs.writeFileSync(filepath, swaggerJSON);
process.exit();

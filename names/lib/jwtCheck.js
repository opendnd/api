const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// setup token check
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_URI,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: process.env.AUTH0_ALGOS.split(','),
});

module.exports = jwtCheck;

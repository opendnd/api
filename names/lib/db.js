const mongoose = require('mongoose');
const Theme = require('./models/Theme');
const DefaultsNomina = require('./models/DefaultsNomina');

if (!['test', 'debug'].includes(process.env.NODE_ENV)) mongoose.connect(process.env.MONGO_URI);

const db = {
  Theme,
  DefaultsNomina,
};

module.exports = db;

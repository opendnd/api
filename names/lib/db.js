const mongoose = require('mongoose');
const Theme = require('./models/Theme');

if (process.env.NODE_ENV !== 'test') mongoose.connect(process.env.MONGO_URI);

const db = {
  Theme,
};

module.exports = db;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const DefaultsNomina = new Schema(Schema.Types.Mixed, { strict: false });

module.exports = mongoose.model('DefaultsNomina', DefaultsNomina);

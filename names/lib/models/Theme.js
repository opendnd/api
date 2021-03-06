const mongoose = require('mongoose');
const { Schema } = mongoose;

const Theme = new Schema({
  name: {
    type: String,
    required: [true, 'You must include a name for the theme'],
  },
  male: {
    type: [String],
    required: [true, 'You must include a male array of names'],
  },
  female: {
    type: [String],
    required: [true, 'You must include a female array of names'],
  },
  dominia: {
    type: [String],
    required: [true, 'You must include a dominia array of names'],
  },
  themeID: {
    type: String,
    required: [true, 'Theme must have a UUID'],
  },
  groupID: {
    type: String,
    required: [true, 'Theme must be assigned to a group'],
  },
});

module.exports = mongoose.model('Theme', Theme);

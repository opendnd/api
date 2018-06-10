const opendnd = require('opendnd');
const { Nomina } = opendnd;

const prepareDefaults = (row) => {
  const nextDefaults = Object.assign({}, row._doc);
  delete nextDefaults._id;
  delete nextDefaults.__v;
  delete nextDefaults.groupID;
  return nextDefaults;
};

// return a list of themes
const nominaList = (row) => {
  const defaults = prepareDefaults(row);
  const nomina = new Nomina({ defaults });
  return nomina.getThemes();
};

// return the generate name(s) based on the opts
const nominaGenerate = (opts = {}, row) => {
  const defaults = prepareDefaults(row);
  const nomina = new Nomina({ defaults });
  return nomina.generate(opts);
};

module.exports = {
  nominaList,
  nominaGenerate,
};

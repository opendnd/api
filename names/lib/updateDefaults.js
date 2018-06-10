const { Theme, DefaultsNomina } = require('./db');

// update the nomina config for the group
const updateDefaults = (groupID) => {
  const defaults = {
    themes: {},
  };

  // get all
  Theme.find({ groupID }, (err, themes) => {
    if (err) throw err;

    themes.forEach((theme) => {
      const { name, male, female, dominia } = theme;
      const keyName = name.toLowerCase();
      defaults.themes[keyName] = {
        male,
        female,
        dominia,
      };
    });

    // save the config
    DefaultsNomina.findOneAndUpdate(
      { groupID },
      defaults,
      { upsert: true, new: true },
      (updateErr) => {
        if (updateErr) throw updateErr;
      },
    );
  });
};

module.exports = updateDefaults;

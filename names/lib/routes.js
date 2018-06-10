const jwtCheck = require('./jwtCheck');
const addUserMeta = require('./addUserMeta');
const authorize = require('./authorize');
const optAuth = require('./optAuth');
const logger = require('./logger');
const { nominaGenerate, nominaList } = require('./nomina');
const updateDefaults = require('./updateDefaults');
const { Theme, DefaultsNomina } = require('./db');
const uuidv4 = require('uuid/v4');

// additional middleware
const readNames = authorize('read:names');
const writeNames = authorize('write:names');
const optJwtCheck = optAuth(jwtCheck);
const optAddUserMeta = optAuth(addUserMeta);
const optReadNames = optAuth(readNames);

// setup the routes
module.exports.setup = (app) => {
  /**
   * Get a list of themes in Nomina (should match with the Themes list). Auth not required.
   * @route GET /
   * @returns {array} 200 - themes
   */
  app.get('/', [optJwtCheck, optAddUserMeta, optReadNames], (req, res) => {
    const { groupID } = req;

    // if we have a groupID then grab the group's defaults
    if (groupID) {
      DefaultsNomina.findOne({ groupID }, (err, defaults) => {
        if (err) return res.send(err);

        try {
          return res.send(nominaList(defaults));
        } catch (e) {
          return res.send(e);
        }
      });
    // otherwise use system defaults
    } else {
      try {
        return res.send(nominaList());
      } catch (e) {
        return res.send(e);
      }
    }
  });

  /**
   * Generate a name with options. Auth not required.
   * @route POST /
   * @param {string} body.body - options for theme, type and number
   * @returns {object} 200 - name
   */
  app.post('/', [optJwtCheck, optAddUserMeta, optReadNames], (req, res) => {
    const { groupID, body } = req;
    const { theme, type, number } = body;
    const opts = {
      theme,
      type,
      number,
    };

    // if we have a groupID then grab the group's defaults
    if (groupID) {
      DefaultsNomina.findOne({ groupID }, (err, defaults) => {
        if (err) return res.send(err);

        try {
          const result = nominaGenerate(opts, defaults);
          logger.info(`Generating name "${result}"\n\topts: ${JSON.stringify(opts)}`);
          if (Array.isArray(result)) return res.send({ names: result });
          return res.send({ name: result });
        } catch (e) {
          return res.send(e);
        }
      });
    // otherwise use system defaults
    } else {
      try {
        const result = nominaGenerate(opts);
        logger.info(`Generating name "${result}"\n\topts: ${JSON.stringify(opts)}`);
        if (Array.isArray(result)) return res.send({ names: result });
        return res.send({ name: result });
      } catch (e) {
        return res.send(e);
      }
    }
  });

  /**
   * Get all themes for names.
   * @route GET /themes
   * @returns {array} 200 - themes
   */
  app.get('/themes', [jwtCheck, addUserMeta, readNames], (req, res) => {
    const { groupID } = req;

    // get all
    Theme.find({ groupID }, (err, themes) => {
      if (err) return res.send(err);
      return res.send(themes);
    });
  });

  /**
   * Create a theme for names.
   * @route POST /themes
   * @param {string} body.body - options for male, female and dominia arrays
   * @returns {object} 200 - theme
   */
  app.post('/themes', [jwtCheck, addUserMeta, writeNames], (req, res) => {
    const { groupID, body } = req;
    const { male = [], female = [], dominia = [], name } = body;
    const themeID = uuidv4();

    // create
    Theme.create({ groupID, themeID, male, female, dominia, name }, (err, theme) => {
      if (err) return res.send(err);
      updateDefaults(groupID);
      return res.send(theme);
    });
  });

  /**
   * Get a theme.
   * @route GET /themes/{themeID}
   * @param {string} themeID.path.required - themeID
   * @returns {object} 200 - theme
   */
  app.get('/themes/:themeID', [jwtCheck, addUserMeta, readNames], (req, res) => {
    const { groupID, params } = req;
    const { themeID } = params;

    // get one
    Theme.findOne({ groupID, themeID }, (err, theme) => {
      if (err) return res.send(err);
      if (theme) return res.send(theme);
      return res.status(404).send('Theme not found');
    });
  });

  /**
   * Update a theme.
   * @route PUT /themes/{themeID}
   * @param {string} themeID.path.required - themeID
   * @param {string} body.body - options for male, female and dominia arrays
   * @returns {object} 200 - theme
   */
  app.put('/themes/:themeID', [jwtCheck, addUserMeta, writeNames], (req, res) => {
    const { groupID, params, body } = req;
    const { themeID } = params;
    const { male = [], female = [], dominia = [], name } = body;

    // upsert
    Theme.findOneAndUpdate(
      { groupID, themeID },
      { male, female, dominia, name },
      { upsert: true, new: true },
      (err, theme) => {
        if (err) return res.send(err);
        updateDefaults(groupID);
        return res.send(theme);
      },
    );
  });

  /**
   * Delete a theme.
   * @route DELETE /themes/{themeID}
   * @param {string} themeID.path.required - themeID
   * @returns {string} 200 - ok
   */
  app.delete('/themes/:themeID', [jwtCheck, addUserMeta, writeNames], (req, res) => {
    const { groupID, params } = req;
    const { themeID } = params;

    // delete
    Theme.deleteOne({ groupID, themeID }, (err) => {
      if (err) return res.send(err);
      updateDefaults(groupID);
      return res.send('ok');
    });
  });
};

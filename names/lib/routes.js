const pinfo = require('../package');
const { version } = pinfo;
const opendnd = require('opendnd');
const { Nomina } = opendnd;
const jwtCheck = require('./jwtCheck');
const addUserID = require('./addUserID');
const logger = require('./logger');
const { Theme } = require('./db');
const uuidv4 = require('uuid/v4');

// setup the routes
module.exports.setup = (app) => {
  /**
   * Get the API version. Auth not required.
   * @route GET /
   * @returns {string} 200 - version
   */
  app.get('/', (req, res) => {
    res.send({ version });
  });

  /**
   * Generate a name with options. Auth not required.
   * @route POST /
   * @param {string} body.body - options for theme, type and number
   * @returns {object} 200 - name
   */
  app.post('/', (req, res) => {
    try {
      const opts = req.body;
      const name = Nomina.generate(opts);

      logger.info(`Generating name "${name}"\n\topts: ${JSON.stringify(opts)}`);

      // response with array
      if (Array.isArray(name)) return res.send({ names: name });

      // standard response
      return res.send({
        name,
      });
    } catch (e) {
      return res.send(e);
    }
  });

  /**
   * Get all themes for names.
   * @route GET /themes
   * @returns {array} 200 - themes
   */
  app.get('/themes', [jwtCheck, addUserID], (req, res) => {
    const { userID } = req;

    // get all
    Theme.find({ userID }, (err, themes) => {
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
  app.post('/themes', [jwtCheck, addUserID], (req, res) => {
    const { userID, body } = req;
    const { male = [], female = [], dominia = [] } = body;
    const themeID = uuidv4();

    // create
    Theme.create({ userID, themeID, male, female, dominia }, (err, theme) => {
      if (err) return res.send(err);
      return res.send(theme);
    });
  });

  /**
   * Get a theme.
   * @route GET /themes/{themeID}
   * @param {string} themeID.path.required - themeID
   * @returns {object} 200 - theme
   */
  app.get('/themes/:themeID', [jwtCheck, addUserID], (req, res) => {
    const { userID, params } = req;
    const { themeID } = params;

    // get one
    Theme.findOne({ userID, themeID }, (err, theme) => {
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
  app.put('/themes/:themeID', [jwtCheck, addUserID], (req, res) => {
    const { userID, params, body } = req;
    const { themeID } = params;
    const { male = [], female = [], dominia = [] } = body;

    // upsert
    Theme.findOneAndUpdate(
      { userID, themeID },
      { male, female, dominia },
      { upsert: true, new: true },
      (err, theme) => {
        if (err) return res.send(err);
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
  app.delete('/themes/:themeID', [jwtCheck, addUserID], (req, res) => {
    const { userID, params } = req;
    const { themeID } = params;

    // delete
    Theme.deleteOne({ userID, themeID }, (err) => {
      if (err) return res.send(err);
      return res.send('ok');
    });
  });
};

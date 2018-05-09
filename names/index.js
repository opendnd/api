const opendnd = require('opendnd');
const { Nomina } = opendnd;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());

// POST   https://api.opendnd.org/v1/names
app.post('/', (req, res) => {
  try {
    const opts = req.body;
    const name = Nomina.generate(opts);

    console.log(`Generating name "${name}"\n\topts: ${JSON.stringify(opts)}`);

    // response with array
    if (Array.isArray(name)) return res.send({ names: name });

    // standard response
    return res.send({
      name,
    });
  } catch (e) {
    return res.error(e);
  }
});

// TODO: GET https://api.opendnd.org/v1/names/themes
app.get('/themes', (req, res) => {
  res.send('Coming soon: Get all themes for names.');
});

// TODO: POST https://api.opendnd.org/v1/names/themes
app.post('/themes', (req, res) => {
  res.send('Coming soon: Create a theme for names.');
});

// TODO: GET https://api.opendnd.org/v1/names/themes/:theme_id
app.get('/themes/:theme_id', (req, res) => {
  res.send('Coming soon: Get a theme.');
});

// TODO: PUT https://api.opendnd.org/v1/names/themes/:theme_id
app.put('/themes/:theme_id', (req, res) => {
  res.send('Coming soon: Update a theme.');
});

// TODO: DELETE https://api.opendnd.org/v1/names/themes/:theme_id
app.delete('/themes/:theme_id', (req, res) => {
  res.send('Coming soon: Delete a theme.');
});

app.listen(PORT, () => console.log(`Names microservice listening on port ${PORT}`));

module.exports = app;

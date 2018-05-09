const opendnd = require('opendnd');
const { Nomina } = opendnd;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// POST   https://api.opendnd.org/v1/names
app.post('/', (req, res) => {
  const name = Nomina.generate();
  res.send({
    name,
  });
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

app.listen(PORT, () => process.stdout.write(`Names microservice listening on port ${PORT}`));

module.exports = app;

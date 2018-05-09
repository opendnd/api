# Cultures
Cultures are a combination of language, religion, music, food and much more that make your world unique.

#### `GET    https://api.opendnd.org/v1/cultures`
Get all cultures.

#### `POST   https://api.opendnd.org/v1/cultures`
Create a culture. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/cultures/:culture_id`
Get a culture.

#### `POST   https://api.opendnd.org/v1/cultures/:culture_id/export/:format`
Export the culture into either markdown, yaml, text or a culturae file (`*.cul`).

#### `PUT    https://api.opendnd.org/v1/cultures/:culture_id`
Update a culture.

#### `DELETE https://api.opendnd.org/v1/cultures/:culture_id`
Delete a culture.
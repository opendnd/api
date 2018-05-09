# Languages
Languages are the spoken and written languages that fill your world.

#### `GET    https://api.opendnd.org/v1/languages`
Get all languages.

#### `POST   https://api.opendnd.org/v1/languages`
Create a language. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/languages/:language_id`
Get a language.

#### `POST   https://api.opendnd.org/v1/languages/:language_id/export/:format`
Export the language into either markdown, yaml, text or a linguae file (`*.lin`).

#### `PUT    https://api.opendnd.org/v1/languages/:language_id`
Update a language.

#### `DELETE https://api.opendnd.org/v1/languages/:language_id`
Delete a language.
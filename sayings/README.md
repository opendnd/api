# Sayings
Sayings are the idioms, maxims, mottos of your world as it relates to the people, places, things and concepts.

#### `GET    https://api.opendnd.org/v1/sayings`
Get all sigil.

#### `POST   https://api.opendnd.org/v1/sayings`
Create a sigil. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/sayings/:saying_id`
Get a sigil.

#### `POST   https://api.opendnd.org/v1/sayings/:saying_id/export/:format`
Export the sigil into either markdown, yaml, text or a dicta file (`*.dic`).

#### `PUT    https://api.opendnd.org/v1/sayings/:saying_id`
Update a sigil.

#### `DELETE https://api.opendnd.org/v1/sayings/:saying_id`
Delete a sigil.
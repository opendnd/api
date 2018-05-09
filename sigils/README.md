# Sigils
Sigils are the flags, insignias and crests that the factions of your world use to proudly show their colors.

#### `GET    https://api.opendnd.org/v1/sigils`
Get all sigil.

#### `POST   https://api.opendnd.org/v1/sigils`
Create a sigil. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/sigils/:sigil_id`
Get a sigil.

#### `POST   https://api.opendnd.org/v1/sigils/:sigil_id/export/:format`
Export the sigil into either markdown, yaml, text or a sigila file (`*.sig`).

#### `PUT    https://api.opendnd.org/v1/sigils/:sigil_id`
Update a sigil.

#### `DELETE https://api.opendnd.org/v1/sigils/:sigil_id`
Delete a sigil.
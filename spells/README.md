# Spells
Spells are used by the magic users of your world and have various effects and damages.

#### `GET    https://api.opendnd.org/v1/spells`
Get all spells.

#### `POST   https://api.opendnd.org/v1/spells`
Create a spell. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/spells/:spell_id`
Get a spell.

#### `POST   https://api.opendnd.org/v1/spells/:spell_id/export/:format`
Export the spell into either markdown, yaml, text or a expeditiones file (`*.exp`).

#### `PUT    https://api.opendnd.org/v1/spells/:spell_id`
Update a spell.

#### `DELETE https://api.opendnd.org/v1/spells/:spell_id`
Delete a spell.
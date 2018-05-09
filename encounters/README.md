# Encounters
Encounters are the heart of conflict in your world, monsters, players and enemies collide to do battle.

#### `GET    https://api.opendnd.org/v1/encounters`
Get all encounters.

#### `POST   https://api.opendnd.org/v1/encounters`
Create an encounter. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/encounters/:encounter_id`
Get an encounter.

#### `POST   https://api.opendnd.org/v1/encounters/:encounter_id/export/:format`
Export the encounter into either markdown, yaml, text or a congressa file (`*.cgr`).

#### `PUT    https://api.opendnd.org/v1/encounters/:encounter_id`
Update an encounter.

#### `DELETE https://api.opendnd.org/v1/encounters/:encounter_id`
Delete an encounter.
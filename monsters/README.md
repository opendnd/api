# Monsters
Monsters are the beasts that make up your world both natural and evil.

#### `GET    https://api.opendnd.org/v1/monsters`
Get all monsters.

#### `POST   https://api.opendnd.org/v1/monsters`
Create a monster. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/monsters/:monster_id`
Get a monster.

#### `POST   https://api.opendnd.org/v1/monsters/:monster_id/export/:format`
Export the monster into either markdown, yaml, text or a monstra file (`*.mon`).

#### `PUT    https://api.opendnd.org/v1/monsters/:monster_id`
Update a monster.

#### `DELETE https://api.opendnd.org/v1/monsters/:monster_id`
Delete a monster.
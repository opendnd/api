# Dungeons
Dungeons are not just traditional dungeons but also forests, caverns and mazes that make up your world's dark underbelly.

#### `GET    https://api.opendnd.org/v1/dungeons`
Get all dungeons.

#### `POST   https://api.opendnd.org/v1/dungeons`
Create a dungeon. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/dungeons/:dungeon_id`
Get a dungeon.

#### `POST   https://api.opendnd.org/v1/dungeons/:dungeon_id/export/:format`
Export the dungeon into either markdown, yaml, text or a domniones file (`*.don`).

#### `PUT    https://api.opendnd.org/v1/dungeons/:dungeon_id`
Update a dungeon.

#### `DELETE https://api.opendnd.org/v1/dungeons/:dungeon_id`
Delete a dungeon.
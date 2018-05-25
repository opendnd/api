# Traps
Traps and puzzles make your dungeons more challenging by forcing the players to work together.

#### `GET    https://api.opendnd.org/v1/traps`
Get all traps.

#### `POST   https://api.opendnd.org/v1/traps`
Create a trap. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/traps/:trap_id`
Get a trap.

#### `POST   https://api.opendnd.org/v1/traps/:trap_id/export/:format`
Export the trap into either markdown, yaml, text or a captiones file (`*.cap`).

#### `PUT    https://api.opendnd.org/v1/traps/:trap_id`
Update a trap.

#### `DELETE https://api.opendnd.org/v1/traps/:trap_id`
Delete a trap.
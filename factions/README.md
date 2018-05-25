# Factions
Factions are the political powers that influence your world and give depth to your quests and domains.

#### `GET    https://api.opendnd.org/v1/factions`
Get all factions.

#### `POST   https://api.opendnd.org/v1/factions`
Create a faction. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id`
Get a faction.

#### `POST   https://api.opendnd.org/v1/factions/:faction_id/simulate`
Simulate a range of time in a faction that generates `stories` for this faction.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id/persons`
Get all persons associated with this faction.

#### `POST   https://api.opendnd.org/v1/factions/:faction_id/persons`
Create a person that would fit in this faction's profile.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id/buildings`
Get the buildings associated with this faction.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id/items`
Get the items associated with this faction.

#### `POST   https://api.opendnd.org/v1/factions/:faction_id/export/:format`
Export the faction into either markdown, yaml, text or a factiones file (`*.fac`).

#### `PUT    https://api.opendnd.org/v1/factions/:faction_id`
Update a faction.

#### `DELETE https://api.opendnd.org/v1/factions/:faction_id`
Delete a faction.
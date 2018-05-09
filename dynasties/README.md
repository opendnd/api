# Dynasties
Dynasties are the familial factions that form the powers of your world and provide context for your character's rich backstory.

#### `GET    https://api.opendnd.org/v1/dynasties`
Get all dynasties.

#### `POST   https://api.opendnd.org/v1/dynasties`
Create a dynasty. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id`
Get a dynasty.

#### `POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/simulate`
Simulate a range of time in a dynasty that generates `stories` for this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/faction`
Get the faction associated with this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/persons`
Get all persons associated with this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/buildings`
Get the buildings associated with this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/items`
Get the items associated with this dynasty.

#### `POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/export/:format`
Export the dynasty into either markdown, yaml, text or a dynastia file (`*.dyn`).

#### `PUT    https://api.opendnd.org/v1/dynasties/:dynasty_id`
Update a dynasty.

#### `DELETE https://api.opendnd.org/v1/dynasties/:dynasty_id`
Delete a dynasty.
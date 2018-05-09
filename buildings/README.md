# Buildings
Buildings are the structures that make up your cities, towns and villages.

#### `GET    https://api.opendnd.org/v1/buildings`
Get all buildings.

#### `POST   https://api.opendnd.org/v1/buildings`
Create a building. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/buildings/:building_id`
Get a building.

#### `GET    https://api.opendnd.org/v1/buildings/:building_id/map`
Get the map for this building.

#### `POST   https://api.opendnd.org/v1/buildings/:building_id/map`
Create or override the map for this building.

#### `POST   https://api.opendnd.org/v1/buildings/:building_id/export/:format`
Export the building into either markdown, yaml, text or an aedificia file (`*.aed`).

#### `PUT    https://api.opendnd.org/v1/buildings/:building_id`
Update a building.

#### `DELETE https://api.opendnd.org/v1/buildings/:building_id`
Delete a building.
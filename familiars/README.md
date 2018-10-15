# Familiars
Familiars are the companion beasts of your world. 

#### `GET    https://api.opendnd.org/v1/familiars`
Get all familiars.

#### `POST   https://api.opendnd.org/v1/familiars`
Create a familiar. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/familiars/:familiar_id`
Get a familiar.

#### `PUT    https://api.opendnd.org/v1/familiars/:familiar_id`
Update a familiar.

#### `DELETE https://api.opendnd.org/v1/familiars/:familiar_id`
Delete a familiar.
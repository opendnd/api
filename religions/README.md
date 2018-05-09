# Religions
Religions form the gods, demi-gods and divine entities that inspire your world.

#### `GET    https://api.opendnd.org/v1/religions`
Get all religions.

#### `POST   https://api.opendnd.org/v1/religions`
Create a religion. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/religions/:religion_id`
Get a religion.

#### `POST   https://api.opendnd.org/v1/religions/:religion_id/export/:format`
Export the religion into either markdown, yaml, text or a religiones file (`*.rel`).

#### `PUT    https://api.opendnd.org/v1/religions/:religion_id`
Update a religion.

#### `DELETE https://api.opendnd.org/v1/religions/:religion_id`
Delete a religion.
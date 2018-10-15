# Titles
Titles are used to describe a certain position for a character.

#### `GET    https://api.opendnd.org/v1/titles`
Get all titles.

#### `POST   https://api.opendnd.org/v1/titles`
Create a title. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/titles/:title_id`
Get a title.

#### `PUT    https://api.opendnd.org/v1/titles/:title_id`
Update a title.

#### `DELETE https://api.opendnd.org/v1/titles/:title_id`
Delete a title.
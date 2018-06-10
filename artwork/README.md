# Artwork
Artwork makes up the paintings, sculptures, literature of your unique world.

#### `GET    https://api.opendnd.org/v1/artwork`
Get all artwork.

#### `POST   https://api.opendnd.org/v1/artwork`
Create a artwork. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/artwork/:artwork_id`
Get a artwork.

#### `POST   https://api.opendnd.org/v1/artwork/:artwork_id/export/:format`
Export the artwork into either markdown, yaml, text or an artes file (`*.art`).

#### `PUT    https://api.opendnd.org/v1/artwork/:artwork_id`
Update a artwork.

#### `DELETE https://api.opendnd.org/v1/artwork/:artwork_id`
Delete a artwork.
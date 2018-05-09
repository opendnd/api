# Stories
Stories have a beginning, middle, and end and have a protagonist and antagonist.

#### `GET    https://api.opendnd.org/v1/stories`
Get all stories.

#### `POST   https://api.opendnd.org/v1/stories`
Create a story. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/stories/:story_id`
Get a story.

#### `POST   https://api.opendnd.org/v1/stories/:story_id/export/:format`
Export the story into either markdown, yaml, text or a fabulae file (`*.fab`).

#### `PUT    https://api.opendnd.org/v1/stories/:story_id`
Update a story.

#### `DELETE https://api.opendnd.org/v1/stories/:story_id`
Delete a story.
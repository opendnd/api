# Persons
Persons are the characters both playable and non that make up your world.

#### `GET    https://api.opendnd.org/v1/persons`
Get all persons.

#### `POST   https://api.opendnd.org/v1/persons`
Create a person. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/persons/:person_id`
Get a person.

#### `GET    https://api.opendnd.org/v1/persons/:person_id/avatar`
Get the avatar for this person.

#### `POST   https://api.opendnd.org/v1/persons/:person_id/avatar`
Create or override the avatar for this person.

#### `POST   https://api.opendnd.org/v1/persons/:person_id/simulate`
Simulate a range of time in a person that generates `stories` for this person.

#### `POST   https://api.opendnd.org/v1/persons/:person_id/export/:format`
Export the person into either markdown, yaml, text or a personae file (`*.per`).

#### `PUT    https://api.opendnd.org/v1/persons/:person_id`
Update a person.

#### `DELETE https://api.opendnd.org/v1/persons/:person_id`
Delete a person.
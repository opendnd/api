# Events
Events are the different noteworthy happenings in your world such as births, deaths, foundings, etc.

#### `GET    https://api.opendnd.org/v1/events`
Get all events.

#### `POST   https://api.opendnd.org/v1/events`
Create a event. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/events/:event_id`
Get a event.

#### `POST   https://api.opendnd.org/v1/events/:event_id/export/:format`
Export the event into either markdown, yaml, text or a eventus file (`*.evn`).

#### `PUT    https://api.opendnd.org/v1/events/:event_id`
Update a event.

#### `DELETE https://api.opendnd.org/v1/events/:event_id`
Delete a event.
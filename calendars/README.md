# Calendars
Calendars are used to record stories throughout time.

#### `GET    https://api.opendnd.org/v1/calendars`
Get all calendars.

#### `POST   https://api.opendnd.org/v1/calendars`
Create a calendar. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/calendars/:calendar_id`
Get a calendar.

#### `POST   https://api.opendnd.org/v1/calendars/:calendar_id/export/:format`
Export the calendar into either markdown, yaml, text or a calendae file (`*.cal`).

#### `PUT    https://api.opendnd.org/v1/calendars/:calendar_id`
Update a calendar.

#### `DELETE https://api.opendnd.org/v1/calendars/:calendar_id`
Delete a calendar.
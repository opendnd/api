# Dialogs
Dialogs are the non-playable interactions, narratives and riddles that interact with your players.

#### `GET    https://api.opendnd.org/v1/dialogs`
Get all dialogs.

#### `POST   https://api.opendnd.org/v1/dialogs`
Create a dialog. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/dialogs/:dialog_id`
Get a dialog.

#### `POST   https://api.opendnd.org/v1/dialogs/:dialog_id/export/:format`
Export the dialog into either markdown, yaml, text or a conservationes file (`*.cvn`).

#### `PUT    https://api.opendnd.org/v1/dialogs/:dialog_id`
Update a dialog.

#### `DELETE https://api.opendnd.org/v1/dialogs/:dialog_id`
Delete a dialog.
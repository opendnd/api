# Quests
Quests make up the adventures of your campaign and give players exciting goals to achieve or terrible fates to prevent.

#### `GET    https://api.opendnd.org/v1/quests`
Get all quests.

#### `POST   https://api.opendnd.org/v1/quests`
Create a quest. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/quests/:quest_id`
Get a quest.

#### `POST   https://api.opendnd.org/v1/quests/:quest_id/export/:format`
Export the quest into either markdown, yaml, text or a quaestae file (`*.que`).

#### `PUT    https://api.opendnd.org/v1/quests/:quest_id`
Update a quest.

#### `DELETE https://api.opendnd.org/v1/quests/:quest_id`
Delete a quest.
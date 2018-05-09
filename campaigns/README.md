# Campaigns
Campaigns are the central glue that holds your players together in a party and joins quests and stories together in a narrative.

#### `GET    https://api.opendnd.org/v1/campaigns`
Get all campaigns.

#### `POST   https://api.opendnd.org/v1/campaigns`
Create a campaign. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/campaigns/:campaign_id`
Get a campaign.

#### `POST   https://api.opendnd.org/v1/campaigns/:campaign_id/export/:format`
Export the campaign into either markdown, yaml, text or a expeditiones file (`*.exp`).

#### `PUT    https://api.opendnd.org/v1/campaigns/:campaign_id`
Update a campaign.

#### `DELETE https://api.opendnd.org/v1/campaigns/:campaign_id`
Delete a campaign.
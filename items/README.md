# Items
Items are used for many different purposes, such as equipment to a person, stored items in a building or container, used in a trap and many other uses.

#### `GET    https://api.opendnd.org/v1/items`
Get all items.

#### `POST   https://api.opendnd.org/v1/items`
Create an item. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/items/:item_id`
Get an item.

#### `PUT    https://api.opendnd.org/v1/items/:item_id`
Update an item.

#### `DELETE https://api.opendnd.org/v1/items/:item_id`
Delete an item.
# Vehicles
Vehicles are the mechanical or magical objects that can transport characters and things across your world.

#### `GET    https://api.opendnd.org/v1/vehicles`
Get all vehicles.

#### `POST   https://api.opendnd.org/v1/vehicles`
Create a vehicle. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/vehicles/:vehicle_id`
Get a vehicle.

#### `POST   https://api.opendnd.org/v1/vehicles/:vehicle_id/export/:format`
Export the vehicle into either markdown, yaml, text or a captiones file (`*.cap`).

#### `PUT    https://api.opendnd.org/v1/vehicles/:vehicle_id`
Update a vehicle.

#### `DELETE https://api.opendnd.org/v1/vehicles/:vehicle_id`
Delete a vehicle.
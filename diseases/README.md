# Diseases
Diseases are the illnesses and conditions that affect the inhabitants of your world.

#### `GET    https://api.opendnd.org/v1/diseases`
Get all diseases.

#### `POST   https://api.opendnd.org/v1/diseases`
Create a disease. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/diseases/:disease_id`
Get a disease.

#### `POST   https://api.opendnd.org/v1/diseases/:disease_id/export/:format`
Export the disease into either markdown, yaml, text or a malariae file (`*.mal`).

#### `PUT    https://api.opendnd.org/v1/diseases/:disease_id`
Update a disease.

#### `DELETE https://api.opendnd.org/v1/diseases/:disease_id`
Delete a disease.
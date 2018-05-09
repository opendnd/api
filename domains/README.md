# Domains
Domains are the basic geopolitical components that make up the world you're building. This includes high level nations such as kingdoms down to the lowest level communities like villages and hamlets.

#### `GET    https://api.opendnd.org/v1/domains`
Get all domains.

#### `POST   https://api.opendnd.org/v1/domains`
Create a domain. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/domains/:domain_id`
Get a domain.

#### `POST   https://api.opendnd.org/v1/domains/:domain_id/simulate`
Simulate a range of time in a domain that generates `stories` for this domain.

#### `GET    https://api.opendnd.org/v1/domains/:domain_id/persons`
Get all persons associated with this domain.

#### `POST   https://api.opendnd.org/v1/domains/:domain_id/persons`
Create a person that would fit in this domain's profile.

#### `GET    https://api.opendnd.org/v1/domains/:domain_id/map`
Get the map for this domain.

#### `POST   https://api.opendnd.org/v1/domains/:domain_id/map`
Create or override the map for this domain.

#### `POST   https://api.opendnd.org/v1/domains/:domain_id/export/:format`
Export the domain into either markdown, yaml, text or a dominia file (`*.dom`).

#### `PUT    https://api.opendnd.org/v1/domains/:domain_id`
Update a domain.

#### `DELETE https://api.opendnd.org/v1/domains/:domain_id`
Delete a domain.
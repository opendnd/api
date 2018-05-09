# DNA
DNA are the dice-encoded rolls that make up the essence of your character.

#### `GET    https://api.opendnd.org/v1/dna`
Get all DNA.

#### `POST   https://api.opendnd.org/v1/dna`
Create DNA. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/dna/:dna_id`
Get DNA.

#### `POST   https://api.opendnd.org/v1/dna/:dna_id/export/:format`
Export the DNA into either markdown, yaml, text or a genetica file (`*.dna`).

#### `PUT    https://api.opendnd.org/v1/dna/:dna_id`
Update DNA.

#### `DELETE https://api.opendnd.org/v1/dna/:dna_id`
Delete DNA.
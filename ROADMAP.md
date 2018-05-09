# API
This is a specification for the OpenDnD API which can be used to generate, save, modify resources for use in world building, storytelling and building campaigns. These tools are designed with the DM in mind but some may be useful to a player looking to build a character and provide a rich backstory. The goal is to provide you with a starting point for your creativity and help solve the "blank canvas problem" when coming up with content for your world.

## Roadmap
Below are a list of API routes that are on the roadmap:

```sh
# generic
POST   https://api.opendnd.org/v1/auth
POST   https://api.opendnd.org/v1/import

# items
GET    https://api.opendnd.org/v1/items
POST   https://api.opendnd.org/v1/items
GET    https://api.opendnd.org/v1/items/:item_id
PUT    https://api.opendnd.org/v1/items/:item_id
DELETE https://api.opendnd.org/v1/items/:item_id

# races
GET    https://api.opendnd.org/v1/races
POST   https://api.opendnd.org/v1/races
GET    https://api.opendnd.org/v1/races/:race_id
PUT    https://api.opendnd.org/v1/races/:race_id
DELETE https://api.opendnd.org/v1/races/:race_id

# backgrounds
GET    https://api.opendnd.org/v1/backgrounds
POST   https://api.opendnd.org/v1/backgrounds
GET    https://api.opendnd.org/v1/backgrounds/:background_id
PUT    https://api.opendnd.org/v1/backgrounds/:background_id
DELETE https://api.opendnd.org/v1/backgrounds/:background_id

# classes
GET    https://api.opendnd.org/v1/classes
POST   https://api.opendnd.org/v1/classes
GET    https://api.opendnd.org/v1/classes/:class_id
PUT    https://api.opendnd.org/v1/classes/:class_id
DELETE https://api.opendnd.org/v1/classes/:class_id

# domains
GET    https://api.opendnd.org/v1/domains
POST   https://api.opendnd.org/v1/domains
GET    https://api.opendnd.org/v1/domains/:domain_id
POST   https://api.opendnd.org/v1/domains/:domain_id/simulate
GET    https://api.opendnd.org/v1/domains/:domain_id/persons
POST   https://api.opendnd.org/v1/domains/:domain_id/persons
GET    https://api.opendnd.org/v1/domains/:domain_id/map
POST   https://api.opendnd.org/v1/domains/:domain_id/map
POST   https://api.opendnd.org/v1/domains/:domain_id/export/:format
PUT    https://api.opendnd.org/v1/domains/:domain_id
DELETE https://api.opendnd.org/v1/domains/:domain_id

# dynasties
GET    https://api.opendnd.org/v1/dynasties
POST   https://api.opendnd.org/v1/dynasties
GET    https://api.opendnd.org/v1/dynasties/:dynasty_id
POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/simulate
GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/faction
GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/persons
GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/buildings
GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/items
POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/export/:format
PUT    https://api.opendnd.org/v1/dynasties/:dynasty_id
DELETE https://api.opendnd.org/v1/dynasties/:dynasty_id

# factions
GET    https://api.opendnd.org/v1/factions
POST   https://api.opendnd.org/v1/factions
GET    https://api.opendnd.org/v1/factions/:faction_id
POST   https://api.opendnd.org/v1/factions/:faction_id/simulate
GET    https://api.opendnd.org/v1/factions/:faction_id/persons
POST   https://api.opendnd.org/v1/factions/:faction_id/persons
GET    https://api.opendnd.org/v1/factions/:faction_id/buildings
GET    https://api.opendnd.org/v1/factions/:faction_id/items
POST   https://api.opendnd.org/v1/factions/:faction_id/export/:format
PUT    https://api.opendnd.org/v1/factions/:faction_id
DELETE https://api.opendnd.org/v1/factions/:faction_id

# persons
GET    https://api.opendnd.org/v1/persons
POST   https://api.opendnd.org/v1/persons
GET    https://api.opendnd.org/v1/persons/:person_id
GET    https://api.opendnd.org/v1/persons/:person_id/avatar
POST   https://api.opendnd.org/v1/persons/:person_id/avatar
POST   https://api.opendnd.org/v1/persons/:person_id/simulate
POST   https://api.opendnd.org/v1/persons/:person_id/export/:format
PUT    https://api.opendnd.org/v1/persons/:person_id
DELETE https://api.opendnd.org/v1/persons/:person_id

# dna
GET    https://api.opendnd.org/v1/dna
POST   https://api.opendnd.org/v1/dna
GET    https://api.opendnd.org/v1/dna/:dna_id
POST   https://api.opendnd.org/v1/dna/:dna_id/export/:format
PUT    https://api.opendnd.org/v1/dna/:dna_id
DELETE https://api.opendnd.org/v1/dna/:dna_id

# sigils
GET    https://api.opendnd.org/v1/sigils
POST   https://api.opendnd.org/v1/sigils
GET    https://api.opendnd.org/v1/sigils/:sigil_id
POST   https://api.opendnd.org/v1/sigils/:sigil_id/export/:format
PUT    https://api.opendnd.org/v1/sigils/:sigil_id
DELETE https://api.opendnd.org/v1/sigils/:sigil_id

# names
POST   https://api.opendnd.org/v1/names
GET    https://api.opendnd.org/v1/names/themes
POST   https://api.opendnd.org/v1/names/themes
GET    https://api.opendnd.org/v1/names/themes/:theme_id
PUT    https://api.opendnd.org/v1/names/themes/:theme_id
DELETE https://api.opendnd.org/v1/names/themes/:theme_id

# buildings
GET    https://api.opendnd.org/v1/buildings
POST   https://api.opendnd.org/v1/buildings
GET    https://api.opendnd.org/v1/buildings/:building_id
GET    https://api.opendnd.org/v1/buildings/:building_id/map
POST   https://api.opendnd.org/v1/buildings/:building_id/map
POST   https://api.opendnd.org/v1/buildings/:building_id/export/:format
PUT    https://api.opendnd.org/v1/buildings/:building_id
DELETE https://api.opendnd.org/v1/buildings/:building_id

# encounters
GET    https://api.opendnd.org/v1/encounters
POST   https://api.opendnd.org/v1/encounters
GET    https://api.opendnd.org/v1/encounters/:encounter_id
POST   https://api.opendnd.org/v1/encounters/:encounter_id/export/:format
PUT    https://api.opendnd.org/v1/encounters/:encounter_id
DELETE https://api.opendnd.org/v1/encounters/:encounter_id

# monsters
GET    https://api.opendnd.org/v1/monsters
POST   https://api.opendnd.org/v1/monsters
GET    https://api.opendnd.org/v1/monsters/:monster_id
POST   https://api.opendnd.org/v1/monsters/:monster_id/export/:format
PUT    https://api.opendnd.org/v1/monsters/:monster_id
DELETE https://api.opendnd.org/v1/monsters/:monster_id

# traps
GET    https://api.opendnd.org/v1/traps
POST   https://api.opendnd.org/v1/traps
GET    https://api.opendnd.org/v1/traps/:trap_id
POST   https://api.opendnd.org/v1/traps/:trap_id/export/:format
PUT    https://api.opendnd.org/v1/traps/:trap_id
DELETE https://api.opendnd.org/v1/traps/:trap_id

# dungeons
GET    https://api.opendnd.org/v1/dungeons
POST   https://api.opendnd.org/v1/dungeons
GET    https://api.opendnd.org/v1/dungeons/:dungeon_id
POST   https://api.opendnd.org/v1/dungeons/:dungeon_id/export/:format
PUT    https://api.opendnd.org/v1/dungeons/:dungeon_id
DELETE https://api.opendnd.org/v1/dungeons/:dungeon_id

# quests
GET    https://api.opendnd.org/v1/quests
POST   https://api.opendnd.org/v1/quests
GET    https://api.opendnd.org/v1/quests/:quest_id
POST   https://api.opendnd.org/v1/quests/:quest_id/export/:format
PUT    https://api.opendnd.org/v1/quests/:quest_id
DELETE https://api.opendnd.org/v1/quests/:quest_id

# dialogs
GET    https://api.opendnd.org/v1/dialogs
POST   https://api.opendnd.org/v1/dialogs
GET    https://api.opendnd.org/v1/dialogs/:dialog_id
POST   https://api.opendnd.org/v1/dialogs/:dialog_id/export/:format
PUT    https://api.opendnd.org/v1/dialogs/:dialog_id
DELETE https://api.opendnd.org/v1/dialogs/:dialog_id

# stories
GET    https://api.opendnd.org/v1/stories
POST   https://api.opendnd.org/v1/stories
GET    https://api.opendnd.org/v1/stories/:story_id
POST   https://api.opendnd.org/v1/stories/:story_id/export/:format
PUT    https://api.opendnd.org/v1/stories/:story_id
DELETE https://api.opendnd.org/v1/stories/:story_id

# calendars
GET    https://api.opendnd.org/v1/calendars
POST   https://api.opendnd.org/v1/calendars
GET    https://api.opendnd.org/v1/calendars/:calendar_id
POST   https://api.opendnd.org/v1/calendars/:calendar_id/export/:format
PUT    https://api.opendnd.org/v1/calendars/:calendar_id
DELETE https://api.opendnd.org/v1/calendars/:calendar_id

# campaigns
GET    https://api.opendnd.org/v1/campaigns
POST   https://api.opendnd.org/v1/campaigns
GET    https://api.opendnd.org/v1/campaigns/:campaign_id
POST   https://api.opendnd.org/v1/campaigns/:campaign_id/export/:format
PUT    https://api.opendnd.org/v1/campaigns/:campaign_id
DELETE https://api.opendnd.org/v1/campaigns/:campaign_id
```

## Generic
These are generic routes for the API.

#### `POST   https://api.opendnd.org/v1/auth`
Authenticate the user account to the API.

#### `POST   https://api.opendnd.org/v1/import`
Import a file created from the CLI tools into the API.

## Items
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

## Races
Races are the backbone of a person down to the DNA. Races like humans, dwarves, elves, etc. can be heavily customized.

#### `GET    https://api.opendnd.org/v1/races`
Get all race options for your account.

#### `POST   https://api.opendnd.org/v1/races`
Add a race option for your account.

#### `GET    https://api.opendnd.org/v1/races/:race_id`
Get a race option.

#### `PUT    https://api.opendnd.org/v1/races/:race_id`
Update a race option.

#### `DELETE https://api.opendnd.org/v1/races/:race_id`
Delete a race option.

## Backgrounds
Backgrounds are used for a person to help determine ideals, bonds, etc. Where a person comes from is important to give us context on where they'll go next.

#### `GET    https://api.opendnd.org/v1/backgrounds`
Get all background options for your account.

#### `POST   https://api.opendnd.org/v1/backgrounds`
Create a background option for your account.

#### `GET    https://api.opendnd.org/v1/backgrounds/:background_id`
Get a background option.

#### `PUT    https://api.opendnd.org/v1/backgrounds/:background_id`
Update a background option.

#### `DELETE https://api.opendnd.org/v1/backgrounds/:background_id`
Delete a background option.

## Classes
Classes are used for a person to determine which skills and feats the character will have.

#### `GET    https://api.opendnd.org/v1/classes`
Get all class options for your account.

#### `POST   https://api.opendnd.org/v1/classes`
Create a class option for your account.

#### `GET    https://api.opendnd.org/v1/classes/:class_id`
Get a class option.

#### `PUT    https://api.opendnd.org/v1/classes/:class_id`
Update a class option.

#### `DELETE https://api.opendnd.org/v1/classes/:class_id`
Delete a class option.

## Domains
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

## Dynasties
Dynasties are the familial factions that form the powers of your world and provide context for your character's rich backstory.

#### `GET    https://api.opendnd.org/v1/dynasties`
Get all dynasties.

#### `POST   https://api.opendnd.org/v1/dynasties`
Create a dynasty. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id`
Get a dynasty.

#### `POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/simulate`
Simulate a range of time in a dynasty that generates `stories` for this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/faction`
Get the faction associated with this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/persons`
Get all persons associated with this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/buildings`
Get the buildings associated with this dynasty.

#### `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/items`
Get the items associated with this dynasty.

#### `POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/export/:format`
Export the dynasty into either markdown, yaml, text or a dynastia file (`*.dyn`).

#### `PUT    https://api.opendnd.org/v1/dynasties/:dynasty_id`
Update a dynasty.

#### `DELETE https://api.opendnd.org/v1/dynasties/:dynasty_id`
Delete a dynasty.

## Factions
Factions are the political powers that form your world and give depth to your quests and domains.

#### `GET    https://api.opendnd.org/v1/factions`
Get all factions.

#### `POST   https://api.opendnd.org/v1/factions`
Create a faction. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id`
Get a faction.

#### `POST   https://api.opendnd.org/v1/factions/:faction_id/simulate`
Simulate a range of time in a faction that generates `stories` for this faction.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id/persons`
Get all persons associated with this faction.

#### `POST   https://api.opendnd.org/v1/factions/:faction_id/persons`
Create a person that would fit in this faction's profile.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id/buildings`
Get the buildings associated with this faction.

#### `GET    https://api.opendnd.org/v1/factions/:faction_id/items`
Get the items associated with this faction.

#### `POST   https://api.opendnd.org/v1/factions/:faction_id/export/:format`
Export the faction into either markdown, yaml, text or a factiones file (`*.fac`).

#### `PUT    https://api.opendnd.org/v1/factions/:faction_id`
Update a faction.

#### `DELETE https://api.opendnd.org/v1/factions/:faction_id`
Delete a faction.

## Persons
Persons are the characters both playable and non that make up your world.

#### `GET    https://api.opendnd.org/v1/persons`
Get all persons.

#### `POST   https://api.opendnd.org/v1/persons`
Create a person. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/persons/:person_id`
Get a person.

#### `GET    https://api.opendnd.org/v1/persons/:person_id/avatar`
Get the avatar for this person.

#### `POST   https://api.opendnd.org/v1/persons/:person_id/avatar`
Create or override the avatar for this person.

#### `POST   https://api.opendnd.org/v1/persons/:person_id/simulate`
Simulate a range of time in a person that generates `stories` for this person.

#### `POST   https://api.opendnd.org/v1/persons/:person_id/export/:format`
Export the person into either markdown, yaml, text or a personae file (`*.per`).

#### `PUT    https://api.opendnd.org/v1/persons/:person_id`
Update a person.

#### `DELETE https://api.opendnd.org/v1/persons/:person_id`
Delete a person.

## DNA
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

## Sigils
Sigils are the flags, insignias and crests that the factions of your world use to proudly show their colors.

#### `GET    https://api.opendnd.org/v1/sigils`
Get all sigil.

#### `POST   https://api.opendnd.org/v1/sigils`
Create a sigil. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/sigils/:sigil_id`
Get a sigil.

#### `POST   https://api.opendnd.org/v1/sigils/:sigil_id/export/:format`
Export the sigil into either markdown, yaml, text or a sigila file (`*.sig`).

#### `PUT    https://api.opendnd.org/v1/sigils/:sigil_id`
Update a sigil.

#### `DELETE https://api.opendnd.org/v1/sigils/:sigil_id`
Delete a sigil.

## Names
Names are used for everything from naming characters to naming your domains, buildings, streets and more.

#### `POST   https://api.opendnd.org/v1/names`
Generate a name with options.

#### `GET    https://api.opendnd.org/v1/names/themes`
Get all themes for names.

#### `POST   https://api.opendnd.org/v1/names/themes`
Create a theme for names.

#### `GET    https://api.opendnd.org/v1/names/themes/:theme_id`
Get a theme.

#### `PUT    https://api.opendnd.org/v1/names/themes/:theme_id`
Update a theme.

#### `DELETE https://api.opendnd.org/v1/names/themes/:theme_id`
Delete a theme.

## Buildings
Buildings are the structures that make up your cities, towns and villages.

#### `GET    https://api.opendnd.org/v1/buildings`
Get all buildings.

#### `POST   https://api.opendnd.org/v1/buildings`
Create a building. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/buildings/:building_id`
Get a building.

#### `GET    https://api.opendnd.org/v1/buildings/:building_id/map`
Get the map for this building.

#### `POST   https://api.opendnd.org/v1/buildings/:building_id/map`
Create or override the map for this building.

#### `POST   https://api.opendnd.org/v1/buildings/:building_id/export/:format`
Export the building into either markdown, yaml, text or an aedificia file (`*.aed`).

#### `PUT    https://api.opendnd.org/v1/buildings/:building_id`
Update a building.

#### `DELETE https://api.opendnd.org/v1/buildings/:building_id`
Delete a building.

## Encounters
Encounters are the heart of conflict in your world, monsters, players and enemies collide to do battle.

#### `GET    https://api.opendnd.org/v1/encounters`
Get all encounters.

#### `POST   https://api.opendnd.org/v1/encounters`
Create an encounter. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/encounters/:encounter_id`
Get an encounter.

#### `POST   https://api.opendnd.org/v1/encounters/:encounter_id/export/:format`
Export the encounter into either markdown, yaml, text or a congressa file (`*.cgr`).

#### `PUT    https://api.opendnd.org/v1/encounters/:encounter_id`
Update an encounter.

#### `DELETE https://api.opendnd.org/v1/encounters/:encounter_id`
Delete an encounter.

## Monsters
Monsters are the beasts that make up your world both natural and evil.

#### `GET    https://api.opendnd.org/v1/monsters`
Get all monsters.

#### `POST   https://api.opendnd.org/v1/monsters`
Create a monster. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/monsters/:monster_id`
Get a monster.

#### `POST   https://api.opendnd.org/v1/monsters/:monster_id/export/:format`
Export the monster into either markdown, yaml, text or a monstra file (`*.mon`).

#### `PUT    https://api.opendnd.org/v1/monsters/:monster_id`
Update a monster.

#### `DELETE https://api.opendnd.org/v1/monsters/:monster_id`
Delete a monster.

## Traps
Traps make your dungeons more challenging by forcing the players to work together.

#### `GET    https://api.opendnd.org/v1/traps`
Get all traps.

#### `POST   https://api.opendnd.org/v1/traps`
Create a trap. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/traps/:trap_id`
Get a trap.

#### `POST   https://api.opendnd.org/v1/traps/:trap_id/export/:format`
Export the trap into either markdown, yaml, text or a captiones file (`*.cap`).

#### `PUT    https://api.opendnd.org/v1/traps/:trap_id`
Update a trap.

#### `DELETE https://api.opendnd.org/v1/traps/:trap_id`
Delete a trap.

## Dungeons
Dungeons are not just traditional dungeons but also forests, caverns and mazes that make up your world's dark underbelly.

#### `GET    https://api.opendnd.org/v1/dungeons`
Get all dungeons.

#### `POST   https://api.opendnd.org/v1/dungeons`
Create a dungeon. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/dungeons/:dungeon_id`
Get a dungeon.

#### `POST   https://api.opendnd.org/v1/dungeons/:dungeon_id/export/:format`
Export the dungeon into either markdown, yaml, text or a domniones file (`*.don`).

#### `PUT    https://api.opendnd.org/v1/dungeons/:dungeon_id`
Update a dungeon.

#### `DELETE https://api.opendnd.org/v1/dungeons/:dungeon_id`
Delete a dungeon.

## Quests
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

## Dialogs
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

## Stories
Stories have a beginning, middle, and end and have a protagonist and antagonist.

#### `GET    https://api.opendnd.org/v1/stories`
Get all stories.

#### `POST   https://api.opendnd.org/v1/stories`
Create a story. If passing the `save=true` option this will save it to the API. Otherwise it will generate without saving.

#### `GET    https://api.opendnd.org/v1/stories/:story_id`
Get a story.

#### `POST   https://api.opendnd.org/v1/stories/:story_id/export/:format`
Export the story into either markdown, yaml, text or a fabulae file (`*.fab`).

#### `PUT    https://api.opendnd.org/v1/stories/:story_id`
Update a story.

#### `DELETE https://api.opendnd.org/v1/stories/:story_id`
Delete a story.

## Calendars
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

## Campaigns
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

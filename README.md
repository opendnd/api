# API
This is a specification for the OpenDnD API (https://api.opendnd.org) which can be used to generate, save, modify resources for use in world building, storytelling and building campaigns. These tools are designed with the DM in mind but some may be useful to a player looking to build a character and provide a rich backstory. The goal is to provide you with a starting point for your creativity and help solve the "blank canvas problem" when coming up with content for your world.

## Roadmap
Below are a list of API routes that are on the roadmap:

### [Core](core/README.md)
- [ ] `POST   https://api.opendnd.org/v1/auth`
- [ ] `POST   https://api.opendnd.org/v1/import`

### [Items](items/README.md)
- [ ] `GET    https://api.opendnd.org/v1/items`
- [ ] `POST   https://api.opendnd.org/v1/items`
- [ ] `GET    https://api.opendnd.org/v1/items/:item_id`
- [ ] `PUT    https://api.opendnd.org/v1/items/:item_id`
- [ ] `DELETE https://api.opendnd.org/v1/items/:item_id`

### [Races](races/README.md)
- [ ] `GET    https://api.opendnd.org/v1/races`
- [ ] `POST   https://api.opendnd.org/v1/races`
- [ ] `GET    https://api.opendnd.org/v1/races/:race_id`
- [ ] `PUT    https://api.opendnd.org/v1/races/:race_id`
- [ ] `DELETE https://api.opendnd.org/v1/races/:race_id`

### [Backgrounds](backgrounds/README.md)
- [ ] `GET    https://api.opendnd.org/v1/backgrounds`
- [ ] `POST   https://api.opendnd.org/v1/backgrounds`
- [ ] `GET    https://api.opendnd.org/v1/backgrounds/:background_id`
- [ ] `PUT    https://api.opendnd.org/v1/backgrounds/:background_id`
- [ ] `DELETE https://api.opendnd.org/v1/backgrounds/:background_id`

### [Classes](classes/README.md)
- [ ] `GET    https://api.opendnd.org/v1/classes`
- [ ] `POST   https://api.opendnd.org/v1/classes`
- [ ] `GET    https://api.opendnd.org/v1/classes/:class_id`
- [ ] `PUT    https://api.opendnd.org/v1/classes/:class_id`
- [ ] `DELETE https://api.opendnd.org/v1/classes/:class_id`

### [Domains](domains/README.md)
- [ ] `GET    https://api.opendnd.org/v1/domains`
- [ ] `POST   https://api.opendnd.org/v1/domains`
- [ ] `GET    https://api.opendnd.org/v1/domains/:domain_id`
- [ ] `POST   https://api.opendnd.org/v1/domains/:domain_id/simulate`
- [ ] `GET    https://api.opendnd.org/v1/domains/:domain_id/persons`
- [ ] `POST   https://api.opendnd.org/v1/domains/:domain_id/persons`
- [ ] `GET    https://api.opendnd.org/v1/domains/:domain_id/map`
- [ ] `POST   https://api.opendnd.org/v1/domains/:domain_id/map`
- [ ] `POST   https://api.opendnd.org/v1/domains/:domain_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/domains/:domain_id`
- [ ] `DELETE https://api.opendnd.org/v1/domains/:domain_id`

### [Dynasties](dynasties/README.md)
- [ ] `GET    https://api.opendnd.org/v1/dynasties`
- [ ] `POST   https://api.opendnd.org/v1/dynasties`
- [ ] `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id`
- [ ] `POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/simulate`
- [ ] `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/faction`
- [ ] `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/persons`
- [ ] `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/buildings`
- [ ] `GET    https://api.opendnd.org/v1/dynasties/:dynasty_id/items`
- [ ] `POST   https://api.opendnd.org/v1/dynasties/:dynasty_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/dynasties/:dynasty_id`
- [ ] `DELETE https://api.opendnd.org/v1/dynasties/:dynasty_id`

### [Factions](factions/README.md)
- [ ] `GET    https://api.opendnd.org/v1/factions`
- [ ] `POST   https://api.opendnd.org/v1/factions`
- [ ] `GET    https://api.opendnd.org/v1/factions/:faction_id`
- [ ] `POST   https://api.opendnd.org/v1/factions/:faction_id/simulate`
- [ ] `GET    https://api.opendnd.org/v1/factions/:faction_id/persons`
- [ ] `POST   https://api.opendnd.org/v1/factions/:faction_id/persons`
- [ ] `GET    https://api.opendnd.org/v1/factions/:faction_id/buildings`
- [ ] `GET    https://api.opendnd.org/v1/factions/:faction_id/items`
- [ ] `POST   https://api.opendnd.org/v1/factions/:faction_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/factions/:faction_id`
- [ ] `DELETE https://api.opendnd.org/v1/factions/:faction_id`

### [Persons](persons/README.md)
- [ ] `GET    https://api.opendnd.org/v1/persons`
- [ ] `POST   https://api.opendnd.org/v1/persons`
- [ ] `GET    https://api.opendnd.org/v1/persons/:person_id`
- [ ] `GET    https://api.opendnd.org/v1/persons/:person_id/avatar`
- [ ] `POST   https://api.opendnd.org/v1/persons/:person_id/avatar`
- [ ] `POST   https://api.opendnd.org/v1/persons/:person_id/simulate`
- [ ] `POST   https://api.opendnd.org/v1/persons/:person_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/persons/:person_id`
- [ ] `DELETE https://api.opendnd.org/v1/persons/:person_id`

### [DNA](dna/README.md)
- [ ] `GET    https://api.opendnd.org/v1/dna`
- [ ] `POST   https://api.opendnd.org/v1/dna`
- [ ] `GET    https://api.opendnd.org/v1/dna/:dna_id`
- [ ] `POST   https://api.opendnd.org/v1/dna/:dna_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/dna/:dna_id`
- [ ] `DELETE https://api.opendnd.org/v1/dna/:dna_id`

### [Sigils](sigils/README.md)
- [ ] `GET    https://api.opendnd.org/v1/sigils`
- [ ] `POST   https://api.opendnd.org/v1/sigils`
- [ ] `GET    https://api.opendnd.org/v1/sigils/:sigil_id`
- [ ] `POST   https://api.opendnd.org/v1/sigils/:sigil_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/sigils/:sigil_id`
- [ ] `DELETE https://api.opendnd.org/v1/sigils/:sigil_id`

### [Names](names/README.md)
- [x] `POST   https://api.opendnd.org/v1/names`
- [ ] `GET    https://api.opendnd.org/v1/names/themes`
- [ ] `POST   https://api.opendnd.org/v1/names/themes`
- [ ] `GET    https://api.opendnd.org/v1/names/themes/:theme_id`
- [ ] `PUT    https://api.opendnd.org/v1/names/themes/:theme_id`
- [ ] `DELETE https://api.opendnd.org/v1/names/themes/:theme_id`

### [Buildings](buildings/README.md)
- [ ] `GET    https://api.opendnd.org/v1/buildings`
- [ ] `POST   https://api.opendnd.org/v1/buildings`
- [ ] `GET    https://api.opendnd.org/v1/buildings/:building_id`
- [ ] `GET    https://api.opendnd.org/v1/buildings/:building_id/map`
- [ ] `POST   https://api.opendnd.org/v1/buildings/:building_id/map`
- [ ] `POST   https://api.opendnd.org/v1/buildings/:building_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/buildings/:building_id`
- [ ] `DELETE https://api.opendnd.org/v1/buildings/:building_id`

### [Encounters](encounters/README.md)
- [ ] `GET    https://api.opendnd.org/v1/encounters`
- [ ] `POST   https://api.opendnd.org/v1/encounters`
- [ ] `GET    https://api.opendnd.org/v1/encounters/:encounter_id`
- [ ] `POST   https://api.opendnd.org/v1/encounters/:encounter_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/encounters/:encounter_id`
- [ ] `DELETE https://api.opendnd.org/v1/encounters/:encounter_id`

### [Monsters](monsters/README.md)
- [ ] `GET    https://api.opendnd.org/v1/monsters`
- [ ] `POST   https://api.opendnd.org/v1/monsters`
- [ ] `GET    https://api.opendnd.org/v1/monsters/:monster_id`
- [ ] `POST   https://api.opendnd.org/v1/monsters/:monster_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/monsters/:monster_id`
- [ ] `DELETE https://api.opendnd.org/v1/monsters/:monster_id`

### [Traps](traps/README.md)
- [ ] `GET    https://api.opendnd.org/v1/traps`
- [ ] `POST   https://api.opendnd.org/v1/traps`
- [ ] `GET    https://api.opendnd.org/v1/traps/:trap_id`
- [ ] `POST   https://api.opendnd.org/v1/traps/:trap_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/traps/:trap_id`
- [ ] `DELETE https://api.opendnd.org/v1/traps/:trap_id`

### [Dungeons](dungeons/README.md)
- [ ] `GET    https://api.opendnd.org/v1/dungeons`
- [ ] `POST   https://api.opendnd.org/v1/dungeons`
- [ ] `GET    https://api.opendnd.org/v1/dungeons/:dungeon_id`
- [ ] `POST   https://api.opendnd.org/v1/dungeons/:dungeon_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/dungeons/:dungeon_id`
- [ ] `DELETE https://api.opendnd.org/v1/dungeons/:dungeon_id`

### [Quests](quests/README.md)
- [ ] `GET    https://api.opendnd.org/v1/quests`
- [ ] `POST   https://api.opendnd.org/v1/quests`
- [ ] `GET    https://api.opendnd.org/v1/quests/:quest_id`
- [ ] `POST   https://api.opendnd.org/v1/quests/:quest_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/quests/:quest_id`
- [ ] `DELETE https://api.opendnd.org/v1/quests/:quest_id`

### [Dialogs](dialogs/README.md)
- [ ] `GET    https://api.opendnd.org/v1/dialogs`
- [ ] `POST   https://api.opendnd.org/v1/dialogs`
- [ ] `GET    https://api.opendnd.org/v1/dialogs/:dialog_id`
- [ ] `POST   https://api.opendnd.org/v1/dialogs/:dialog_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/dialogs/:dialog_id`
- [ ] `DELETE https://api.opendnd.org/v1/dialogs/:dialog_id`

### [Stories](stories/README.md)
- [ ] `GET    https://api.opendnd.org/v1/stories`
- [ ] `POST   https://api.opendnd.org/v1/stories`
- [ ] `GET    https://api.opendnd.org/v1/stories/:story_id`
- [ ] `POST   https://api.opendnd.org/v1/stories/:story_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/stories/:story_id`
- [ ] `DELETE https://api.opendnd.org/v1/stories/:story_id`

### [Calendars](calendars/README.md)
- [ ] `GET    https://api.opendnd.org/v1/calendars`
- [ ] `POST   https://api.opendnd.org/v1/calendars`
- [ ] `GET    https://api.opendnd.org/v1/calendars/:calendar_id`
- [ ] `POST   https://api.opendnd.org/v1/calendars/:calendar_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/calendars/:calendar_id`
- [ ] `DELETE https://api.opendnd.org/v1/calendars/:calendar_id`

### [Campaigns](campaigns/README.md)
- [ ] `GET    https://api.opendnd.org/v1/campaigns`
- [ ] `POST   https://api.opendnd.org/v1/campaigns`
- [ ] `GET    https://api.opendnd.org/v1/campaigns/:campaign_id`
- [ ] `POST   https://api.opendnd.org/v1/campaigns/:campaign_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/campaigns/:campaign_id`
- [ ] `DELETE https://api.opendnd.org/v1/campaigns/:campaign_id`

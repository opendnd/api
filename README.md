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

### [Tools](tools/README.md)
- [ ] `GET    https://api.opendnd.org/v1/tools`
- [ ] `POST   https://api.opendnd.org/v1/tools`
- [ ] `GET    https://api.opendnd.org/v1/tools/:tool_id`
- [ ] `PUT    https://api.opendnd.org/v1/tools/:tool_id`
- [ ] `DELETE https://api.opendnd.org/v1/tools/:tool_id`

### [Features](features/README.md)
- [ ] `GET    https://api.opendnd.org/v1/features`
- [ ] `POST   https://api.opendnd.org/v1/features`
- [ ] `GET    https://api.opendnd.org/v1/features/:feature_id`
- [ ] `PUT    https://api.opendnd.org/v1/features/:feature_id`
- [ ] `DELETE https://api.opendnd.org/v1/features/:feature_id`

### [Familiars](familiars/README.md)
- [ ] `GET    https://api.opendnd.org/v1/familiars`
- [ ] `POST   https://api.opendnd.org/v1/familiars`
- [ ] `GET    https://api.opendnd.org/v1/familiars/:familiar_id`
- [ ] `PUT    https://api.opendnd.org/v1/familiars/:familiar_id`
- [ ] `DELETE https://api.opendnd.org/v1/familiars/:familiar_id`

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

### [K(c)lasses](klasses/README.md)
- [ ] `GET    https://api.opendnd.org/v1/klasses`
- [ ] `POST   https://api.opendnd.org/v1/klasses`
- [ ] `GET    https://api.opendnd.org/v1/klasses/:klass_id`
- [ ] `PUT    https://api.opendnd.org/v1/klasses/:klass_id`
- [ ] `DELETE https://api.opendnd.org/v1/klasses/:klass_id`

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
- [x] `GET    https://api.opendnd.org/v1/names/themes`
- [x] `POST   https://api.opendnd.org/v1/names/themes`
- [x] `GET    https://api.opendnd.org/v1/names/themes/:theme_id`
- [x] `PUT    https://api.opendnd.org/v1/names/themes/:theme_id`
- [x] `DELETE https://api.opendnd.org/v1/names/themes/:theme_id`

### [Buildings](buildings/README.md)
- [ ] `GET    https://api.opendnd.org/v1/buildings`
- [ ] `POST   https://api.opendnd.org/v1/buildings`
- [ ] `GET    https://api.opendnd.org/v1/buildings/:building_id`
- [ ] `GET    https://api.opendnd.org/v1/buildings/:building_id/map`
- [ ] `POST   https://api.opendnd.org/v1/buildings/:building_id/map`
- [ ] `POST   https://api.opendnd.org/v1/buildings/:building_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/buildings/:building_id`
- [ ] `DELETE https://api.opendnd.org/v1/buildings/:building_id`

### [Titles](titles/README.md)
- [ ] `GET    https://api.opendnd.org/v1/titles`
- [ ] `POST   https://api.opendnd.org/v1/titles`
- [ ] `GET    https://api.opendnd.org/v1/titles/:title_id`
- [ ] `PUT    https://api.opendnd.org/v1/titles/:title_id`
- [ ] `DELETE https://api.opendnd.org/v1/titles/:title_id`

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

### [Languages](languages/README.md)
- [ ] `GET    https://api.opendnd.org/v1/languages`
- [ ] `POST   https://api.opendnd.org/v1/languages`
- [ ] `GET    https://api.opendnd.org/v1/languages/:language_id`
- [ ] `POST   https://api.opendnd.org/v1/languages/:language_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/languages/:language_id`
- [ ] `DELETE https://api.opendnd.org/v1/languages/:language_id`

### [sayings](sayings/README.md)
- [ ] `GET    https://api.opendnd.org/v1/sayings`
- [ ] `POST   https://api.opendnd.org/v1/sayings`
- [ ] `GET    https://api.opendnd.org/v1/sayings/:saying_id`
- [ ] `POST   https://api.opendnd.org/v1/sayings/:saying_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/sayings/:saying_id`
- [ ] `DELETE https://api.opendnd.org/v1/sayings/:saying_id`

### [Cultures](cultures/README.md)
- [ ] `GET    https://api.opendnd.org/v1/cultures`
- [ ] `POST   https://api.opendnd.org/v1/cultures`
- [ ] `GET    https://api.opendnd.org/v1/cultures/:culture_id`
- [ ] `POST   https://api.opendnd.org/v1/cultures/:culture_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/cultures/:culture_id`
- [ ] `DELETE https://api.opendnd.org/v1/cultures/:culture_id`

### [Religions](religions/README.md)
- [ ] `GET    https://api.opendnd.org/v1/religions`
- [ ] `POST   https://api.opendnd.org/v1/religions`
- [ ] `GET    https://api.opendnd.org/v1/religions/:religion_id`
- [ ] `POST   https://api.opendnd.org/v1/religions/:religion_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/religions/:religion_id`
- [ ] `DELETE https://api.opendnd.org/v1/religions/:religion_id`

### [Campaigns](campaigns/README.md)
- [ ] `GET    https://api.opendnd.org/v1/campaigns`
- [ ] `POST   https://api.opendnd.org/v1/campaigns`
- [ ] `GET    https://api.opendnd.org/v1/campaigns/:campaign_id`
- [ ] `POST   https://api.opendnd.org/v1/campaigns/:campaign_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/campaigns/:campaign_id`
- [ ] `DELETE https://api.opendnd.org/v1/campaigns/:campaign_id`

### [Spells](spells/README.md)
- [ ] `GET    https://api.opendnd.org/v1/spells`
- [ ] `POST   https://api.opendnd.org/v1/spells`
- [ ] `GET    https://api.opendnd.org/v1/spells/:spell_id`
- [ ] `POST   https://api.opendnd.org/v1/spells/:spell_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/spells/:spell_id`
- [ ] `DELETE https://api.opendnd.org/v1/spells/:spell_id`

### [Artwork](artwork/README.md)
- [ ] `GET    https://api.opendnd.org/v1/artwork`
- [ ] `POST   https://api.opendnd.org/v1/artwork`
- [ ] `GET    https://api.opendnd.org/v1/artwork/:artwork_id`
- [ ] `POST   https://api.opendnd.org/v1/artwork/:artwork_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/artwork/:artwork_id`
- [ ] `DELETE https://api.opendnd.org/v1/artwork/:artwork_id`

### [Diseases](diseases/README.md)
- [ ] `GET    https://api.opendnd.org/v1/diseases`
- [ ] `POST   https://api.opendnd.org/v1/diseases`
- [ ] `GET    https://api.opendnd.org/v1/diseases/:disease_id`
- [ ] `POST   https://api.opendnd.org/v1/diseases/:disease_id/export/:format`
- [ ] `PUT    https://api.opendnd.org/v1/diseases/:disease_id`
- [ ] `DELETE https://api.opendnd.org/v1/diseases/:disease_id`

## License
The software in this project is licensed under The MIT License (MIT).
This project uses material licensed under the OPEN GAME LICENSE Version 1.0a.
For more information please refer to the [LICENSE](LICENSE).
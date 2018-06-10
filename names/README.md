# Names
Names are used for everything from naming characters to naming your domains, buildings, streets and more.

#### `GET https://api.opendnd.org/v1/names`
Get a list of themes in Nomina (should match with the Themes list). Auth not required.

#### `POST https://api.opendnd.org/v1/names`
Generate a name with options. Auth not required.

#### `GET https://api.opendnd.org/v1/names/themes`
Get all themes for names.

#### `POST https://api.opendnd.org/v1/names/themes`
Create a theme for names.

#### `GET https://api.opendnd.org/v1/names/themes/:theme_id`
Get a theme.

#### `PUT https://api.opendnd.org/v1/names/themes/:theme_id`
Update a theme.

#### `DELETE https://api.opendnd.org/v1/names/themes/:theme_id`
Delete a theme.

## Schemas
This API uses the following schemas:

### Theme
The Theme object has properties to help generate unique names from a source of names either for male, female or "dominia" which is used by the Dominia generator (for cities, towns, kingdoms, etc.).

```
{
  name: 'Modern',
  male: ['Bob', 'David'],
  female: ['Alice', 'Carol'],
  dominia: ['Atlanta', 'Chicago'],
  themeID: 'xxx-xx-xxx', // generated UUID
  groupID: 'groupName', // group name for all your unique data
}
```

### NominaConfig
The NominaConfig is used by the Nomina tool to actually insert the themes into the tool's `defaults` values.

```
{
  themes: {
    'Modern': {
      male: ['Bob', 'David'],
      female: ['Alice', 'Carol'],
      dominia: ['Atlanta', 'Chicago'],
    }
  }
}
```

## Nomina
Most of the functionality for names is generated taking advantage of the [Nomina](https://github.com/opendnd/nomina) project through [OpenDnD](https://github.com/opendnd/opendnd).

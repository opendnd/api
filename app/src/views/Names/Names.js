import React from 'react';
import client from 'config/client';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from 'material-ui';
import { 
  Button,
  RegularCard,
  ManageTable,
  ItemGrid,
  CustomInput,
  CustomSelect,
} from 'components';

const defaultName = {
  type: '',
  theme: '',
  number: '',
};

const defaultTheme = {
  name: '',
  male: '',
  female: '',
  dominia: '',
};

class Names extends React.Component {
  state = {
    curName: Object.assign({}, defaultName),
    curTheme: Object.assign({}, defaultTheme),
    types: ['Male', 'Female', 'Dominia'],
    themes: [],
    names: [],
  }

  componentWillMount() {
    this.getThemes();
  }

  getThemes = () => {
    client.names.themes.index().then((res) => {
      const themes = res.data;

      this.setState({
        themes,
      });
    });
  }

  outputList = (list) => {
    return list.join(', ');
  }

  inputList = (list) => {
    return list.split(',').map((item) => {
      return item.replace(/\s/gi, '');
    });
  }

  handleGenerate = (e) => {
    const { type, theme, number } = this.state.curName;

    client.names.create({
      type,
      theme,
      number,
    }).then((res) => {
      var names = [];
      if (res.data.name) names.push(res.data.name);
      if (res.data.names) names = res.data.names;

      this.setState({ names });
    });
  }

  handleReset = (e) => {
    this.setState({ 
      names: [],
      curName: Object.assign({}, defaultName),
    });
  }

  handleResetTheme = (e) => {
    this.setState({ 
      mode: undefined,
      curTheme: Object.assign({}, defaultTheme),
    });
  }

  handleSave = (e) => {
    const { mode } = this.state;
    if (mode === 'edit') {
      this.handleSaveTheme();
    } else {
      this.handleCreateTheme();
    }
  }

  handleCreateTheme = () => {
    const { curTheme, themes } = this.state;
    const { name, male, female, dominia } = curTheme;

    // create the theme
    client.names.themes.create({
      name,
      male: this.inputList(male),
      female: this.inputList(female),
      dominia: this.inputList(dominia),
    }).then((res) => {
      if (res.data) {
        this.setState({
          themes: [
            ...themes,
            res.data,
          ],
          curTheme: Object.assign({}, defaultTheme),
        });
      }
    });
  }

  handleSaveTheme = () => {
    const { curTheme, themes, themeKey } = this.state;
    const theme = themes[themeKey];
    const { themeID } = theme;
    const { name, male, female, dominia } = curTheme;

    // update the theme
    client.names.themes.update(themeID, {
      name,
      male: this.inputList(male),
      female: this.inputList(female),
      dominia: this.inputList(dominia),
    }).then((res) => {
      if (res.data) {
        this.setState({
          themes: themes.map((item, index) => {
            if (index === themeKey) {
              return Object.assign({}, res.data);
            }
            return item;
          }),
          themeKey: undefined,
          mode: undefined,
          curTheme: Object.assign({}, defaultTheme),
        });
      }
    });
  }

  handleEdit = (key) => {
    const { themes } = this.state;
    const theme = themes[key];
    const { name, male, female, dominia } = theme;

    this.setState({
      curTheme: {
        name,
        male: this.outputList(male),
        female: this.outputList(female),
        dominia: this.outputList(dominia),
      },
      mode: 'edit',
      themeKey: key,
    });
  }

  handleDelete = (key) => {
    const { themes } = this.state;
    const theme = themes[key];
    const { themeID  } = theme;

    // delete the theme
    client.names.themes.delete(themeID).then((res) => {
      if (res.data === 'ok') {
        this.setState({
          themes: [
            ...themes.slice(0, key),
            ...themes.slice(key + 1),
          ],
        });
      }
    });
  }

  handleChange = (e) => {
    const nextState = this.state;
    const { target } = e;
    const { name, value } = target;

    if (name.includes('.')) {
      const parts = name.split('.');
      nextState[parts[0]][parts[1]] = value;
      return this.setState(nextState);
    }

    nextState[name] = value;
    this.setState(nextState);
  }

  render() {
    const { types, themes, curName, curTheme, names, mode } = this.state;
    const tableData = themes.map((theme) => {
      return [
        theme.name,
        this.outputList(theme.male),
        this.outputList(theme.female),
        this.outputList(theme.dominia),
      ];
    });

    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle='Generate Name'
            cardSubtitle='Use the form below to generate a name'
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomSelect
                      labelText='Theme'
                      id='theme'
                      options={themes.map(theme => theme.name)}
                      random={true}
                      inputProps={{
                        name: 'curName.theme',
                        value: curName.theme,
                        onChange: this.handleChange,
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomSelect
                      labelText='Type'
                      id='type'
                      options={types}
                      random={true}
                      inputProps={{
                        name: 'curName.type',
                        value: curName.type,
                        onChange: this.handleChange
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText='Number'
                      id='number'
                      inputProps={{
                        name: 'curName.number',
                        value: curName.number,
                        onChange: this.handleChange,
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    {
                      (names.length > 0) ? (
                        <div>
                          <h4>Generated:</h4>
                          <List>
                            {names.map((name, key) => {
                              return (
                                <ListItem key={key}>
                                  <ListItemText inset primary={name} />
                                </ListItem>
                              )
                            })}
                          </List>
                        </div>
                      ) : null
                    }
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={(
              <div>
                <Button color="primary" onClick={this.handleGenerate}>Generate</Button>
                <Button color="transparent" disabled={(names.length === 0)} onClick={this.handleReset}>Clear</Button>
              </div>
            )}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle='Themes'
            cardSubtitle='Here are the themes available for name generating'
            content={
              <div>
                <ManageTable
                  tableHeaderColor='primary'
                  tableHead={['Theme', 'Male Names', 'Female Names', 'Dominia Names']}
                  tableData={tableData}
                  onEdit={this.handleEdit}
                  onDelete={this.handleDelete}
                />
                <Divider />
                <h4>{ (mode === 'edit') ? 'Update Theme' : 'Create Theme' }</h4>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText='Theme Name'
                      id='theme-name'
                      inputProps={{
                        name: 'curTheme.name',
                        value: curTheme.name,
                        onChange: this.handleChange,
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Male Names"
                      id='theme-male'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        name: 'curTheme.male',
                        value: curTheme.male,
                        onChange: this.handleChange,
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Female Names"
                      id='theme-female'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        name: 'curTheme.female',
                        value: curTheme.female,
                        onChange: this.handleChange,
                      }}
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Dominia Names"
                      id='theme-dominia'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        name: 'curTheme.dominia',
                        value: curTheme.dominia,
                        onChange: this.handleChange,
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Button color='primary' onClick={this.handleSave}>{ (mode === 'edit') ? 'Update Theme' : 'Create Theme' }</Button>
                <Button color="transparent" onClick={this.handleResetTheme}>Cancel</Button>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default Names;

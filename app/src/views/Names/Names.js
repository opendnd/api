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
  Table,
  ItemGrid,
  CustomInput,
  CustomSelect,
} from 'components';

class Names extends React.Component {
  state = {
    type: '',
    theme: '',
    newTheme: {
      name: '',
      male: '',
      female: '',
      dominia: '',
    },
    number: '',
    names: [],
    types: ['Male', 'Female', 'Dominia'],
    themes: [],
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

  handleGenerate = (event) => {
    const { type, theme, number } = this.state;

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

  handleCreateTheme = (event) => {
    const { newTheme } = this.state;
    const { name, male, female, dominia } = newTheme;

    client.names.themes.create({
      name,
      male: male.split(','),
      female: female.split(','),
      dominia: dominia.split(','),
    }).then((res) => {
      console.log(res);
    });
  }

  handleChange = (event) => {
    if (event.target.name.includes('newTheme.')) {
      const nextState = this.state;
      nextState.newTheme[event.target.name.split('.')[1]] = event.target.value;
      return this.setState(nextState);
    }

    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { types, type, themes, theme, newTheme, number, names } = this.state;
    const tableData = themes.map((theme) => {
      return [
        theme.name,
        theme.male.join(', '),
        theme.female.join(', '),
        theme.dominia.join(', '),
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
                        name: 'theme',
                        value: theme,
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
                        name: 'type',
                        value: type,
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
                        name: 'number',
                        value: number,
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
            footer={<Button color='primary' onClick={this.handleGenerate}>Generate</Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle='Themes'
            cardSubtitle='Here are the themes available for your names'
            content={
              <div>
                <Table
                  tableHeaderColor='primary'
                  tableHead={['Theme', 'Male Names', 'Female Names', 'Dominia Names']}
                  tableData={tableData}
                />
                <Divider />
                <h4>Create Theme</h4>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText='Theme Name'
                      id='theme-name'
                      inputProps={{
                        name: 'newTheme.name',
                        value: newTheme.name,
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
                        name: 'newTheme.male',
                        value: newTheme.male,
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
                        name: 'newTheme.female',
                        value: newTheme.female,
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
                        name: 'newTheme.dominia',
                        value: newTheme.dominia,
                        onChange: this.handleChange,
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Button color='primary' onClick={this.handleCreateTheme}>Create Theme</Button>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default Names;

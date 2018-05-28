import React from 'react';
import client from 'config/client';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
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
    number: '',
    names: [],
    types: ['Male', 'Female', 'Dominia'],
    themes: ['Classical', 'Asian', 'Medieval'],
  }

  componentWillMount() {
    // this.getThemes();
  }

  getThemes = () => {
    client.names.themes.index().then((res) => {
      this.setState({
        themes: res.data,
      });
    });
  }

  createName = () => {
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

  handleGenerate = (event) => {
    this.createName();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { types, type, themes, theme, number, names } = this.state;

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
                      options={themes}
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
              <Table
                tableHeaderColor='primary'
                tableHead={['Theme', 'Male Names', 'Female Names', 'Dominia Names']}
                tableData={[
                  [
                    'Classical',
                    'Atticus, Augustus, Cassius, Cato, Cyprian, Felix, Julius, Justus, Lucius, Magnus, Marcus, Maximus, Octavius, Philo, Remus, Rufus, Septimus, Tiberius, Urban',
                    'Aeliana, Antonia, Augusta, Aurelia, Camilla, Cassia, Cecilia, Decima, Drusilla, Flavia, Florentina, Junia, Laelia, Laurentia, Livia, Marilla, Octavia, Priscilla, Sabina, Tanaquil, Tatiana, Tullia, Valentina, Vita',
                    'Rome, Ariminum, Belum, Pompeii, Forum, Genava, Capua, Dyrrachium, Spalatum, Trapezus, Nauportus, Nicomedia, Nicaea, Mediolanum, Barium, Patavium, Nicomedia, Neviodunum, Constantinopolis, Abdera, Aegae, Heraclea, Ithaca, Kallipolis, Neapolis',
                  ],
                ]}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default Names;

import React from 'react';

import {
  withStyles,
  Grid,
  Menu,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  AppBar,
  Tabs,
  Tab,
} from 'material-ui';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { 
  Button,
  ItemGrid,
  RegularCard,
  CustomSelect,
} from 'components';

import geneticaData from 'views/DNA/dragonborn';

const defaultRaces = [
  { name: 'Dragonborn' },
  { name: 'Dwarf' },
  { name: 'Elf' },
  { name: 'Gnome' },
  { name: 'Half-Elf' },
  { name: 'Half-Orc' },
  { name: 'Halfling' },
  { name: 'Human' },
  { name: 'Tiefling' },
];

const defaultCategories = [
  { name: 'General' },
  { name: 'Eye Shape' },
  { name: 'Eye Color' },
  { name: 'Eye Brows' },
  { name: 'Skin' },
  { name: 'Skin Color' },
  { name: 'Skin Aging' },
  { name: 'Face' },
  { name: 'Nose' },
  { name: 'Mouth' },
  { name: 'Hair' },
  { name: 'Hair Color' },
  { name: 'Facial Hair' },
  { name: 'Male Traits' },
  { name: 'Female Traits' },
];

const defaultDice = [
  'd2',
  'd4',
  'd6',
  'd8',
  'd10',
  'd12',
  'd20',
  'd100',
];

const styles = theme => ({
  DNA: {
    flexGrow: 1,
    width: '100%',
  },
  genes: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  test: '',
});

class Races extends React.Component {
  state = {
    anchorEl: null,
    races: defaultRaces,
    curRace: defaultRaces[0],
    expanded: null,
    DNA: {
      category: 0,
    }
  };

  handleExpansionChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleMenuClick = event => {
    console.log(event.target.value);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuSelect = raceKey => {
    const { races } = this.state;
    this.setState({
      curRace: races[raceKey],
    });
    this.handleMenuClose();
  }

  handleChromosomeChange = () => {

  }

  componentWillMount() {
    console.log(geneticaData);
  }

  handleCategoryChange = (event, value) => {
    const nextState = this.state;
    nextState.DNA.category = value;
    this.setState(nextState);
  }

  renderChromosomes() {
    const { classes } = this.props;
    const { test } = this.state;
    const { chromosomes, sex, legend } = geneticaData;

    return (
      <div className={classes.chromosomes}>
        {
          Object.keys(chromosomes).map((chromosome, key) => {
            return (
              <CustomSelect
                key={key}
                labelText={chromosome}
                id="category"
                random={false}
                options={defaultDice}
                inputProps={{
                  name: 'test',
                  value: test,
                  onChange: this.handleChromosomeChange,
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            );
          })
        }
      </div>
    );
  }

  renderGenes() {
    const { DNA } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.genes}>
        <AppBar position="static" color="default">
          <Tabs 
            value={DNA.category}
            onChange={this.handleCategoryChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
          {
            defaultCategories.map((category, key) => {
              return (
                <Tab key={key} label={category.name} />
              );
            })
          }
          </Tabs>
        </AppBar>
        <div>
          Content
        </div>
      </div>
    );
  }

  render() {
    const { anchorEl, races, curRace, expanded } = this.state;
    const { classes } = this.props;

    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <div>
            <span>Selected Race: </span>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleMenuClick}
              color="white"
            >
              {curRace.name}
            </Button>
            <Menu
              id="race-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuClose}
            >
              {
                races.map((race, key) => {
                  return (
                    <MenuItem key={key} onClick={this.handleMenuSelect.bind(this, key)}>{race.name}</MenuItem>
                  );
                })
              }
            </Menu>
          </div>
          <RegularCard
            cardTitle={`${curRace.name} Race Details`}
            cardSubtitle='Here is the information for this race'
            content={
              <div>
                Basic details
              </div>
            }
          />
          <ExpansionPanel expanded={expanded === 'p1'} onChange={this.handleExpansionChange('p1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>DNA Data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.DNA}>
                <h5>Chromosomes</h5>
                {this.renderChromosomes()}
                <h5>Genes</h5>
                {this.renderGenes()}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </ItemGrid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Races);

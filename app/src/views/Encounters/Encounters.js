import React from 'react';
import {
  Grid,
} from 'material-ui';
import { 
  ItemGrid,
} from 'components';

class Encounters extends React.Component {
  state = {}
  componentWillMount() {}
  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <div>
            Coming soon
          </div>
        </ItemGrid>
      </Grid>
    );
  }
}

export default Encounters;

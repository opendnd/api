import React from 'react';
import {
  Grid,
} from 'material-ui';
import { 
  Button,
  RegularCard,
  ItemGrid,
} from 'components';

class DNA extends React.Component {
  state = {}
  componentWillMount() {}
  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle='Generate DNA'
            cardSubtitle='Use the form below to generate DNA'
            content={
              <div>
                Coming soon
              </div>
            }
            footer={(
              <div>
                <Button color="primary">Generate</Button>
                <Button color="transparent" disabled={true}>Clear</Button>
              </div>
            )}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default DNA;

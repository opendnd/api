import React from 'react';
import { Grid, InputLabel } from 'material-ui';

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from 'components';

import avatar from 'assets/img/faces/marc.jpg';

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <div>Coming soon!</div>
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;

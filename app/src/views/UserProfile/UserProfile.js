import React from 'react';

import {
  Grid,
} from 'material-ui';

import {
  ItemGrid
} from 'components';

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <div>Coming Soon</div>
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;

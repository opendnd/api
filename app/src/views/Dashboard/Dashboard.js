import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import { withStyles } from 'material-ui';
import Auth from 'components/Auth/Auth';
import dashboardStyle from 'assets/jss/material-dashboard-react/dashboardStyle';

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  componentWillMount = () => {
    const auth = new Auth(this.props);
    if(!auth.isAuthenticated()) {
      auth.login();
    }
    console.log(auth);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <div>
        Coming Soon
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

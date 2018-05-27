import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";
import Auth from 'views/Auth/Auth';

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

let auth;

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  componentWillMount = () => {
    auth = new Auth(this.props);
    if(!auth.isAuthenticated()) {
      auth.login();
    }
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

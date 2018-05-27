import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import Callback from 'views/Callback/Callback';
import Auth from 'views/Auth/Auth';
import 'assets/css/material-dashboard-react.css';
import indexRoutes from 'routes/index.jsx';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

const auth = new Auth({ history: hist });

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />;
      }}/>
      <Route path="/logout" render={(props) => {
        auth.logout();
        return <Callback {...props} />;
      }}/>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);

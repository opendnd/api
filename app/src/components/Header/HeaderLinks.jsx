import React from 'react';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import { withRouter } from 'react-router';
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from 'material-ui';
import { Person, Search } from '@material-ui/icons';

import { CustomInput, IconButton as SearchButton } from 'components';

import headerLinksStyle from 'assets/jss/material-dashboard-react/headerLinksStyle';

class HeaderLinks extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleProfile = () => {
    this.handleClose();
    this.props.history.replace('/user');
  };

  handleLogout = () => {
    this.handleClose();
    this.props.history.replace('/logout');
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: `${classes.margin} ${classes.search}`
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search'
            }
          }}
        />
        <SearchButton
          color='white'
          aria-label='edit'
          customClass={`${classes.margin} ${classes.searchButton}`}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>

        <Manager style={{ display: 'inline-block' }}>
          <Target>
            <IconButton
              color='inherit'
              aria-label='Person'
              onClick={this.handleClick}
              className={classes.buttonLink}
            >
              <Person className={classes.links} />
              <Hidden mdUp>
                <p className={classes.linkText}>Profile</p>
              </Hidden>
            </IconButton>
          </Target>
          <Popper
            placement='bottom-start'
            eventsEnabled={open}
            className={
              `${classNames({ [classes.popperClose]: !open })} ${classes.pooperResponsive}`
            }
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow
                in={open}
                id='menu-list'
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role='menu'>
                    <MenuItem
                      onClick={this.handleProfile}
                      className={classes.dropdownItem}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleLogout}
                      className={classes.dropdownItem}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(withRouter(HeaderLinks));

import React, { Component } from 'react';
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import PropTypes from 'prop-types';

import tableStyle from 'assets/jss/material-dashboard-react/tableStyle';

class ManageTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteAlert: false,
    };
  }

  handleEdit = (key) => {
    this.props.onEdit(key);
  }

  handleDelete = (key) => {
    this.setState({ 
      deleteAlert: true,
      deleteKey: key,
    });
  }

  handleDeleteConfirm = (e) => {
    this.props.onDelete(this.state.deleteKey);
    this.setState({ 
      deleteAlert: false,
      deleteKey: undefined 
    });
  }

  handleClose = (key) => {
    const nextState = this.state;
    nextState[key] = false;
    this.setState(nextState);
  }

  render() {
    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
    const { deleteAlert } = this.state;

    return (
      <div className={classes.tableResponsive}>
        <Dialog
          open={deleteAlert}
          onClose={this.handleClose.bind(this, 'deleteAlert')}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Are you sure you want to delete this theme?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {'Deleting this theme will prevent any names from being generated with it.'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this, 'deleteAlert')} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDeleteConfirm} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  key={-1}
                 >
                  Actions
                </TableCell>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={classes.tableCell + " " + classes.tableHeadCell}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              return (
                <TableRow key={key}>
                  <TableCell className={classes.tableCell} key={-1}>
                    <IconButton className={classes.button} aria-label="Edit" onClick={this.handleEdit.bind(this, key)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton className={classes.button} aria-label="Delete" onClick={this.handleDelete.bind(this, key)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  {prop.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

ManageTable.defaultProps = {
  tableHeaderColor: 'gray',
  onEdit(){},
  onDelete(){},
};

ManageTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withStyles(tableStyle)(ManageTable);

import React from 'react';
import { 
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from 'material-ui';
import { Clear, Check } from "@material-ui/icons";
import PropTypes from 'prop-types';
import cx from 'classnames';

import customSelectStyle from 'assets/jss/material-dashboard-react/customSelectStyle';

function CustomSelect({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    options,
    random,
    error,
    success
  } = props;

  const labelClasses = cx({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });
  const marginTop = cx({
    [classes.marginTop]: labelText === undefined
  });

  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + ' ' + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Select
        classes={{
          root: marginTop,
          disabled: classes.disabled,
        }}
        id={id}
        {...inputProps}
      >
        { random ? (
          <MenuItem value=''>Random</MenuItem>
        ) : null }
        {options.map((item, key) => {
          return <MenuItem key={key} value={item.toLowerCase()}>{item}</MenuItem>
        })}
      </Select>
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  options: PropTypes.array,
  random: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(customSelectStyle)(CustomSelect);

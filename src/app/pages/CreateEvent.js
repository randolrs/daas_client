import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import withFloatingForm from 'app/containers/WithFloatingForm';
import { FormButtonContainer, FormHeader, FormRowContainer } from 'app/styledComponents/index';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const CreateEvent = () => {

  const [ name, setName ] = useState('');
  const [ date, setDate ] = useState(new Date);
  const [ time, setTime ] = useState(new Date);
  const [ isRecurring, setIsRecurring ] = useState(false);
  const [ password, setPassword ] = useState('');

  const onSubmit = () => {

  }

  return (
    <>
      <FormHeader>Create Event</FormHeader>

      <FormRowContainer>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Event Name"
          name="name"
          autoFocus
          onChange={ e => setName(e.target.value) }
          value={ name }
        />
      </FormRowContainer>

      <FormRowContainer>
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Event Date"
            format="MM/dd/yyyy"
            value={ date }
            onChange={ setDate }
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Event Time"
            value={ time }
            onChange={ setTime }
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>
      </FormRowContainer>

      <FormRowContainer>
        <FormControlLabel
          control={<Switch checked={ isRecurring } onChange={ () => setIsRecurring(!isRecurring) } />}
          label="Is this a recurring event?"
        />
      </FormRowContainer>

      <FormButtonContainer>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={ onSubmit }
        >Create Event</Button>
      </FormButtonContainer>
    </>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default withFloatingForm(connect(mapStateToProps, {})(CreateEvent), 800);

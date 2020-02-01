import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import withFloatingForm from 'app/containers/WithFloatingForm';
import {
  FormButtonContainer,
  FormHeader,
  FormRowContainer,
  FormSubHeader
} from 'app/styledComponents/index';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import TodayIcon from '@material-ui/icons/Today';
import RoomIcon from '@material-ui/icons/Room';

const CreateEvent = () => {

  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState(new Date);
  const [ time, setTime ] = useState(new Date);
  const [ isRecurring, setIsRecurring ] = useState(false);
  const [ venueName, setVenueName ] = useState('');
  const [ venueAddress, setVenueAddress ] = useState('');
  const [ venueAddress2, setVenueAddress2 ] = useState('');
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          multiline
          rows="4"
          fullWidth
          id="description"
          label="Event Description"
          name="description"
          autoFocus
          onChange={ e => setDescription(e.target.value) }
          value={ description }
        />
      </FormRowContainer>

      <FormSubHeader>
        <TodayIcon />
        <span>Date/Time</span>
      </FormSubHeader>
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

      <Collapse in={ isRecurring } collapsedHeight={0}>
        <FormRowContainer>
          <span>Recurring Options</span>
        </FormRowContainer>
      </Collapse>

      <FormSubHeader>
        <RoomIcon />
        <span>Venue</span>
      </FormSubHeader>
      <FormRowContainer>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="venueName"
          label="Venue Name"
          name="venueName"
          onChange={ e => setVenueName(e.target.value) }
          value={ venueName }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="venueAddress"
          label="Venue Address"
          name="venueAddress"
          onChange={ e => setVenueAddress(e.target.value) }
          value={ venueAddress }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="venueAddress2"
          label="Suite/APT #"
          name="venueAddress2"
          onChange={ e => setVenueAddress2(e.target.value) }
          value={ venueAddress2 }
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

export default withFloatingForm(connect(mapStateToProps, {})(CreateEvent), 600);

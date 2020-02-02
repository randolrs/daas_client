import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { createEvent } from 'api/events';

import withFloatingForm from 'app/containers/WithFloatingForm';
import { ordinalSuffixOf } from 'app/helpers/number-helpers';

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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import TodayIcon from '@material-ui/icons/Today';
import RoomIcon from '@material-ui/icons/Room';

const DAILY = 'daily';
const WEEKLY = 'weekly';
const WEEKDAYS = 'weekdays';
const MONTHLY = 'monthly';

const CreateEvent = () => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ website, setWebsite ] = useState('');
  const [ date, setDate ] = useState(new Date());
  const [ time, setTime ] = useState(new Date());
  const [ dateDayOfWeek, setDateDayOfWeek ] = useState('');
  const [ dateDayOfMonth, setDateDayOfMonth ] = useState('');
  const [ isRecurring, setIsRecurring ] = useState(false);
  const [ recurrenceInterval, setRecurrenceInterval ] = useState('');
  const [ venueName, setVenueName ] = useState('');
  const [ venueAddress, setVenueAddress ] = useState('');
  const [ venueAddress2, setVenueAddress2 ] = useState('');

  useEffect(() => {
    setDateDayOfWeek(getDayOfTheWeekFromIndex(date.getDay()));
    setDateDayOfMonth(ordinalSuffixOf(date.getDate()));
  }, [ date ]);

  const onSubmit = async () => {
    const params = {
      attributes: {
        name,
        description,
        website,
      }, recurrence: {
        date, time, recurrenceInterval
      }, venue: {
        id: undefined,
        name: venueName,
        address: venueAddress,
        address2: venueAddress2
      }
    };

    await createEvent(params);
  }

  return (
    <React.Fragment>
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
          onChange={ e => setDescription(e.target.value) }
          value={ description }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="website"
          label="Event Website"
          name="website"
          onChange={ e => setWebsite(e.target.value) }
          value={ website }
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
          <FormControl component="fieldset">
            <FormLabel component="legend">Repeats</FormLabel>
            <RadioGroup
              aria-label="repeats"
              name="repeats"
              value={ recurrenceInterval }
              onChange={ (e) => setRecurrenceInterval(e.target.value) }
            >
              <FormControlLabel value={ DAILY } control={<Radio />} label="Daily" />
              {
                dateDayOfWeek !== 'Saturday' && dateDayOfWeek !== 'Sunday' ?
                  <FormControlLabel value={ WEEKDAYS } control={<Radio />} label="Weekdays Only" />
                : null
              }
              <FormControlLabel value={ WEEKLY } control={<Radio />} label={ `Weekly (${ dateDayOfWeek }s)` } />
              <FormControlLabel value={ MONTHLY } control={<Radio />} label={ `Monthly (${ dateDayOfMonth } day of the month)` } />
            </RadioGroup>
          </FormControl>
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
          size="large"
          variant="contained"
          color="primary"
          onClick={ onSubmit }
        >Create Event</Button>
      </FormButtonContainer>
    </React.Fragment>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default withFloatingForm(connect(mapStateToProps, {})(CreateEvent), 600);

const DAYS_OF_THE_WEEK = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const getDayOfTheWeekFromIndex = (index) => DAYS_OF_THE_WEEK[index] || '';

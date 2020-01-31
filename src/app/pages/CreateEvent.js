import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { loginUser } from '../../redux/action';

const CreateEvent = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
      <span>Create Event</span>
    </>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default connect(mapStateToProps, {})(CreateEvent);

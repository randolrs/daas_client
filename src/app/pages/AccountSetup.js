import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { loginUser } from '../../redux/action';

const AccountSetup = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
      <span>Account Setup</span>
    </>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default connect(mapStateToProps, {})(AccountSetup);

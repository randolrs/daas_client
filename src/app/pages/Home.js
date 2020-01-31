import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { loginUser } from '../../redux/action';

const Home = ({ history }) => {

  history.push('/account-setup');

  return (
    <>
      <span>Home</span>
    </>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default connect(mapStateToProps, {})(withRouter(Home));

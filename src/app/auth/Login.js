import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import withFloatingForm from '../containers/WithFloatingForm';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { loginUser } from '../../redux/action';

const Login = ({ loginUser, isUserLoggedIn }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    redirectToHome();
  }, []);

  useEffect(() => {
    redirectToHome();
  }, [ isUserLoggedIn ]);

  const redirectToHome = () => {
    if(isUserLoggedIn) window.location = '/';
  }

  const onSubmit = async () => {
    await loginUser({
      email,
      password,
    });
  }

  return (
    <>
    <Typography component="h1" variant="h5">
      Login
    </Typography>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      onChange={ e => setEmail(e.target.value) }
      value={ email }
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="password"
      label="Password"
      name="password"
      autoComplete="password"
      onChange={ e => setPassword(e.target.value) }
      value={ password }
    />
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={ onSubmit }
    >Login</Button>
    </>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default withFloatingForm(connect(mapStateToProps, {
  loginUser,
})(Login));

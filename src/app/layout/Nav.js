import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loginUser, logoutUser } from 'redux/action';

import { NAV_HEIGHT } from './dimensions';

const NAV_LINE_HEIGHT = 30;

const Nav = ({ isUserLoggedIn, currentUser, loginUser, logoutUser }) => {

  const goToHome = async () => {
    window.location = '/';
  };

  const goToLogin = async () => {
    window.location = '/login';
  };

  const goToSignup = async () => {
    window.location = '/signup';
  };

  const goToCreateEvent = async () => {
    window.location = '/create-event';
  };

  const logout = async () => {
    await logoutUser();
  };

  return (
    <NavContainer>
      <div className="nav-link-container left">
        <span
          className="link"
          onClick={ goToHome }
        >Home</span>
      </div>
      <div className="nav-link-container right">
      {
        isUserLoggedIn ?
          <>
            <span
              className="link"
              onClick={ goToCreateEvent }
            >Create Event</span>
            <span className="link">Account</span>
            <span
              className="link"
              onClick={ logout }
            >Logout</span>
          </>
        :
          <>
            <span
              className="link"
              onClick={ goToLogin }
            >Login</span>
            <span
              className="link"
              onClick={ goToSignup }
            >Signup</span>
          </>
      }
      </div>
    </NavContainer>
  );
};

const mapStateToProps = ({ isUserLoggedIn, currentUser }) => {
  return {
    isUserLoggedIn,
    currentUser
  };
};

export default connect(mapStateToProps, {
  loginUser,
  logoutUser,
})(Nav);

const NavContainer = styled.div`
  height: ${ NAV_HEIGHT }px;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  .nav-link-container {
    position: absolute;
    height: ${ NAV_HEIGHT }px;

    &.left{
      left: 0px;
    }

    &.right {
      right: 0px;
    }

    span.link {
      display: inline-block;
      line-height: ${ NAV_LINE_HEIGHT }px;
      padding: ${ (NAV_HEIGHT - NAV_LINE_HEIGHT) / 2 }px 20px;
      cursor: pointer;
    }
  }
`;

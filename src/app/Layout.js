import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from './layout/Nav';
import ContentBody from './layout/ContentBody';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateEvent from './pages/CreateEvent';
import NewAccountPrompt from './pages/NewAccountPrompt';
import AccountSetup from './pages/AccountSetup';

const Layout = ({ isUserLoggedIn, history }) => {

  if(!isUserLoggedIn && window.location.pathname !== '/login') return (
    <NewAccountPrompt/>
  );

  // if(isUserLoggedIn) {
  //   console.log(window.location);

  //   history.push('/account-setup');
  // }

  return (
    <React.Fragment>
      <Nav/>
      <ContentBody>
        <Router basename="/">
          <Switch>
            <Route path={ '/' } exact component={ Home } />
            <Route path={ '/login' } component={ Login } />
            <Route path={ '/signup' } component={ Signup } />
            <Route path={ '/create-event' } component={ CreateEvent } />
            <Route path={ '/account-setup' } component={ AccountSetup } />
            <Route path="*" render={() => {
              return <div>I see dead links</div>;
            }} />
          </Switch>
        </Router>
      </ContentBody>
      <Footer/>
    </React.Fragment>
  );
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default connect(mapStateToProps, {})(Layout);

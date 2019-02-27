import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Navigation from '../Navigation';
import Calendar from '../Calendar';
import AuthPage from '../Auth';
import { setCurrentUser } from '../../actions/index';

import * as ROUTES from '../../constants/routes';

const App = (props) => {
  useEffect(() => {
    props.firebase.auth.onAuthStateChanged((authUser) => {
      props.setCurrentUser(authUser);
    });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path={ROUTES.MAIN} component={Calendar} />
          <Route path={ROUTES.AUTH} component={AuthPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  null,
  { setCurrentUser },
)(App);

import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Navigation from '../Navigation';
import Calendar from '../Calendar';
import AuthPage from '../Auth';
import NewEntryPage from '../NewEntry';
import { setCurrentUser } from '../../actions/index';

import * as ROUTES from '../../constants/routes';

const App = ({ firebase, setCurrentUser, currentUser }) => {
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      setCurrentUser(authUser);
    });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Route
            exact
            path={ROUTES.MAIN}
            component={
              currentUser
                ? () => <Calendar firebase={firebase} />
                : AuthPage
            }
          />
          <Route
            path={ROUTES.NEW_ENTRY}
            component={() => <NewEntryPage firebase={firebase} />}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = { setCurrentUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

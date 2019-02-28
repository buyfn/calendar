import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Navigation from '../Navigation';
import Calendar from '../../containers/Calendar';
import AuthPage from '../Auth';
import NewEntryPage from '../NewEntry';
import NotFound from '../NotFound';
import { setCurrentUser, setLoggedTime } from '../../actions';

import * as ROUTES from '../../constants/routes';

const App = ({
  firebase,
  currentUser,
  setCurrentUser,
  setLoggedTime,
}) => {
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async (authUser) => {
      setCurrentUser(authUser);
      if (authUser) {
        const data = await firebase.loggedTime(authUser.uid).once('value');
        setLoggedTime(data.val());
      }
    });
    return unsubscribe;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
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
              component={
                currentUser
                  ? () => <NewEntryPage firebase={firebase} />
                  : NotFound
              }
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = { setCurrentUser, setLoggedTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

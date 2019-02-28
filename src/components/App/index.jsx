import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AuthPage from '../Auth';
import Calendar from '../../containers/Calendar';
import Navigation from '../../containers/Navigation';
import NewEntryPage from '../../containers/NewEntry';
import NotFound from '../NotFound';

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
        setLoggedTime(data.val() || {});
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

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  firebase: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func.isRequired,
  setLoggedTime: PropTypes.func.isRequired,
};
/* eslint-enable */

App.defaultProps = {
  currentUser: null,
};

export default App;

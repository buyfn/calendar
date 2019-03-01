import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { auth } from '../../firebase/firebase';
import { loggedTime } from '../../firebase/api';

import './App.css';
import AuthPage from '../Auth';
import Calendar from '../../containers/Calendar';
import Navigation from '../../containers/Navigation';
import NewEntryPage from '../../containers/NewEntry';
import NotFound from '../NotFound';

import * as ROUTES from '../../constants/routes';

const App = ({
  currentUser,
  setCurrentUser,
  setLoggedTime,
}) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      setCurrentUser(authUser);
      if (authUser) {
        const data = await loggedTime(authUser.uid).once('value');
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
                  ? Calendar
                  : AuthPage
              }
            />
            <Route
              path={ROUTES.NEW_ENTRY}
              component={
                currentUser
                  ? NewEntryPage
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

App.propTypes = {
  currentUser: PropTypes.shape({
    uid: PropTypes.string,
  }),
  setCurrentUser: PropTypes.func.isRequired,
  setLoggedTime: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentUser: null,
};

export default App;

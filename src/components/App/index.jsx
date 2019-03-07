import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { auth } from 'src/firebase/firebase';
import * as ROUTES from 'src/constants/routes';

import './App.css';
import AuthPage from 'src/components/Auth';
import Calendar from 'src/containers/Calendar';
import Navigation from 'src/containers/Navigation';
import NewEntryPage from 'src/containers/NewEntry';
import NotFound from 'src/components/NotFound';

const App = ({
  currentUser,
  setCurrentUser,
  fetchTimelogRequest,
}) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setCurrentUser(authUser);

      if (authUser) {
        fetchTimelogRequest(authUser.uid);
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
  fetchTimelogRequest: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentUser: null,
};

export default App;

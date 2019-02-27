import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navigation from '../Navigation';
import Calendar from '../Calendar';
import AuthPage from '../Auth';

import * as ROUTES from '../../constants/routes';

const App = () => (
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

export default App;

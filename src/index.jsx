import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <FirebaseContext.Consumer>
        {firebase => <App firebase={firebase} />}
      </FirebaseContext.Consumer>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root'),
);

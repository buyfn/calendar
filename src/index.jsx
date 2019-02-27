import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle, max-len
);

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

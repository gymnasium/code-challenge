import React from 'react';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import './App.css';

import { CodeChallenge } from './components';
import rootReducer from './store/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Code Challenge</h1>
      </header>
      <main>
        <CodeChallenge />
      </main>
    </div>
  </Provider>
);

export default App;

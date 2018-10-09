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
    <main className="App">
      <CodeChallenge
        questionNumber={1}
        prompt={'Create a paragraph that says "hello, world"'}
        goalCode="<p>hello, world</p>"
      />
    </main>
  </Provider>
);

export default App;

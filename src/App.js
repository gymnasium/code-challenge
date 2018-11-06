import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import the redux store
import { store, persistor } from './store';

// import custom components used in the app
import { CodeChallenge } from './components';

// app-level css
import './App.css';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <main className="App">
        <CodeChallenge
          questionNumber={1}
          title="Hello world!"
          prompt={'Create a paragraph that says "hello, world"'}
          goalCode="<p>hello, world</p>"
        />
      </main>
    </PersistGate>
  </Provider>
);

export default App;

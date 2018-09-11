import React, { Component } from 'react';
import './App.css';

import { CodeChallenge } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Challenge</h1>
        </header>
        <main>
          <CodeChallenge />
        </main>
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Fragment } from 'react';
import Ladder from './Ladder.js'

const App = () => {
  return (
    <Fragment>
      <header className="App-header">
        <h1>사다리게임.</h1>
      </header>
      <Ladder />
    </Fragment>
  );
};

export default App;

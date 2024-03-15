// src/App.js
import React from 'react';
import './App.css';
import HeartbeatChecker from './HeartbeatChecker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeartbeatChecker />
      </header>
    </div>
  );
}

export default App;

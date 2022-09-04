import React from 'react';
import logo from './amano.gif';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h2><b>React, Dockers and AWS</b></h2>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://tracker.gg/valorant/profile/riot/Hydro%235353/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Best player in valorant!
        </a>
        <p></p>
        <a
          className="App-link"
          href="https://tracker.gg/valorant/profile/riot/Awais%23613/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worst player in valorant
        </a>
          <Link to="/">Home</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
        </div>
      </div>
    </Router>
  );
}

export default App;

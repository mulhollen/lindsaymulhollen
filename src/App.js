import React, { Component } from 'react';
import Nav from './Nav.js';
import Home from './components/Home.js';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;

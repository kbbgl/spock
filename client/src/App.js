import React, { Component } from 'react';
import SearchBar from './comp/SearchBar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spock</h1>
          <h2 className="App-subtitle">Everything you need to know about your stocks</h2>
        </header>
        <SearchBar/>
      </div>
    );
  }
}

export default App;

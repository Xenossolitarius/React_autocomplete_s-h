import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './Components/Autocomplete'
import countriesJsonObj from './input/inputDataJson'
import countriesJsonString from './input/inputDataString'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p></p>
        <Autocomplete
          searchData = {countriesJsonString}
        />
      </div>
    );
  }
}

export default App;

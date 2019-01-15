import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from './Components/Autocomplete';
import countriesJsonObj from './input/inputDataJson';
import countriesJsonString from './input/inputDataString';


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    selection1: '',
    selection2: ''
  }
}

getResult = (result) => {
  console.log(result);
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p></p>


        <Autocomplete
          searchData = {countriesJsonObj}
          searchFunc = {(item,value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
          inputStyle ={{background: 'red'}}
          getFunction = {(data)=> data['name']}
          result = {this.getResult}
        />


        <p></p>
       
        <Autocomplete
          searchData = {countriesJsonString}
          liStyle ={{background: 'red'}}
          result = {this.getResult}
        />



      </div>
    );
  }
}

export default App;

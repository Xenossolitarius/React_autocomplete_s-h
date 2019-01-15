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
    asyncData: []
  }
}

getResult = (result) => {
  console.log(result);
}

asyncFunction = (input) => {
  let newData;
  console.log(input);
  function dummyFunction(){
    return new Promise ((resolve,reject)=>{
      setTimeout(function(){
        newData = countriesJsonString.filter((data)=>data.toLowerCase().indexOf(input.toLowerCase()) > -1);
        resolve();
      },2000)
    })
    
      
  
  }

  dummyFunction()
  .then(() => this.setState({asyncData: newData}));






}




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p></p>
        <p>Sync - JsonObj</p>
        <p></p>


        <Autocomplete
          searchData = {countriesJsonObj}
          searchFunc = {(item,value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
          inputStyle ={{background: 'red'}}
          getFunction = {(data)=> data['name']}
          result = {this.getResult}
        />


        <p></p>
        <p>Sync - JsonString</p>
        <p></p>
       
        <Autocomplete
          searchData = {countriesJsonString}
          liStyle ={{background: 'red'}}
          result = {this.getResult}
        />

        <p></p>
        <p>Async</p>
        <p></p>
       
        <Autocomplete
          asyncSearch = {this.asyncFunction}
          asyncData = {this.state.asyncData}
          result = {this.getResult}
        />



      </div>
    );
  }
}

export default App;

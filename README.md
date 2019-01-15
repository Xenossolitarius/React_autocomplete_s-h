# SeekandHit FE Position Demo Project

Base project for job candidates applying for frontend developer position at [Seekandhit](https://seekandhit.com/).

## API

#Usage

```js
import React, { Component } from 'react';
import Autocomplete from './Components/Autocomplete';

class App extends Component {

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

        //JsonObject
        <Autocomplete
          searchData = {countriesJsonObj}
          searchFunc = {(item,value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
          inputStyle ={{background: 'red'}}
          getFunction = {(data)=> data['name']}
          result = {this.getResult}
        />


        <p></p>
        //String array
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
```

#Props

* `searchData` - accepts Array of Objects or Array of Strings - REQUIRED
* `searchFunc` - accepts function to use for filter method. Accepts two values for comparison - OPTIONAL
* `inputStyle` - require object for inline styling, extends style - OPTIONAL
* `ulStyle` - require object for inline styling, extends style - OPTIONAL
* `liStyle` - require object for inline styling, extends style - OPTIONAL
* `getFunction` - used with Array of Objects to decide searching value - REQUIRED?
* `result` - accepts a callback, passes single value (selection)  - OPTIONAL






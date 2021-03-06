import React, { Component} from "react";
import SuggestionList from './SuggestionList';
import {defaultSearchFunction,combineStyles} from './helpers';
import {inputStyle,mainClass} from './consts';
import propTypes from 'prop-types';




class Autocomplete extends Component {
constructor(props){
    super(props);

    const getFunction = this.props.getFunction;
    const searchData = this.props.searchData;

    this.isAsync = false;

    if(searchData === undefined){
      if(this.props.asyncSearch !== undefined){
        this.isAsync = true;

        this.state = {
          suggestions: [],
          filtSuggestions: [],
          value: ''
      }
      }


    }else{
    
    //use json with get function or array of string
    if(searchData.every(function(i){ return typeof i === "string" })){
        this.state = {
            suggestions: searchData,
            filtSuggestions: [],
            value: ''
        }
        
    }else if( getFunction !== undefined){
        
        this.state ={
            suggestions: searchData.map(getFunction),
            filtSuggestions: [],
            value: ''
        }
        
    }else{
        throw Error('Wrong data format');
    }

  }
   

   //constructor binding
   this.onType = this.onType.bind(this);
   this.clickSelection = this.clickSelection.bind(this);
   
}
//filling input field with selection
clickSelection(suggestion){
  this.setState({value: suggestion})
  this.setState({filtSuggestions: []})
}

//filter on type function
onType(e){

  const userInput = e.currentTarget.value;

  if(this.isAsync === false){
//use default or provided func
  let filteredData;
  const searchFunc = this.props.searchFunc;
  if(this.props.searchFunc === undefined){  
    filteredData =this.state.suggestions.filter(defaultSearchFunction(userInput));
  }else{
    filteredData = this.state.suggestions.filter(function (data){ return searchFunc(data,userInput)});
  }



  this.setState({filtSuggestions: filteredData});
  
}else{

this.props.asyncSearch(userInput);



}

this.setState({value: userInput});
  

}

componentDidUpdate(prevProps){
  if(this.isAsync===true){
    if(prevProps.asyncData !== this.props.asyncData){
      this.setState({filtSuggestions: this.props.asyncData});
    }
  }
}



  render() {

    const {onType} = this;
       
    return (
      <div className = {mainClass}>
        <input
          className = {mainClass + '-input'}
          style = {combineStyles(inputStyle,this.props.inputStyle)}
          type="text"
          value={this.state.value}
    
          onChange = {onType}
        />
        <SuggestionList 
        ulStyle={this.props.ulStyle}
        liStyle={this.props.liStyle}
        filteredData={this.state.filtSuggestions} 
        result = {this.props.result}
        clickSelection = {this.clickSelection}
         />
      </div>
    );
  }
}

//Proptypes
Autocomplete.propTypes = {
asyncSearch: propTypes.any,
asyncData: propTypes.any,
searchData: propTypes.any,
searchFunc: propTypes.func,
inputStyle: propTypes.object,
ulStyle: propTypes.object,
liStyle: propTypes.object,
getFunction: propTypes.func,
result: propTypes.func

}


export default Autocomplete;
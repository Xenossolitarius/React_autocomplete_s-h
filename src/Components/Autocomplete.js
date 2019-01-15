import React, { Component} from "react";
import SuggestionList from './SuggestionList';
import defaultSearchFunction from './helpers';
import {inputStyle,mainClass} from './consts';




class Autocomplete extends Component {
constructor(props){
    super(props);


   


    this.state = {
        suggestions: this.props.searchData,
        filtSuggestions: []
    }


   this.onSingleClick = this.onSingleClick.bind(this);
   this.onType = this.onType.bind(this);
   


}

onSingleClick () {
    //show suggestions
  console.log(this.state.suggestions);

}




onType(e){
  const userInput = e.currentTarget.value;

  let filteredData;
  const searchFunc = this.props.searchFunc;
  if(this.props.searchFunc === undefined){
    filteredData =this.state.suggestions.filter(defaultSearchFunction(userInput));
  }else{
     filteredData = this.state.suggestions.filter(function (data){ return searchFunc(data,userInput)});
 }



  this.setState({filtSuggestions: filteredData});
  

}

  render() {
    let combineInpStyle;
  
    if(this.props.inputStyle !== undefined ){
        combineInpStyle = {...inputStyle, ...this.props.inputStyle};
        console.log(combineInpStyle);
    }else{
        combineInpStyle = inputStyle;
    }


    const {onSingleClick,onType} = this;
       
    return (
      <div className = {mainClass}>
        <input
          className = {mainClass + '-input'}
          style = {combineInpStyle}
          type="text"
          //onClick = {onSingleClick}
          onChange = {onType}
        />
        <SuggestionList 
        ulStyle={this.props.ulStyle}
        liStyle={this.props.liStyle}
         filteredData={this.state.filtSuggestions} />
      </div>
    );
  }
}



export default Autocomplete;
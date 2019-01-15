import React, {Component} from "react";
import {ulStyle,mainClass} from './consts';
import {combineStyles} from './helpers'
import Suggestion from './Suggestion'
import propTypes from 'prop-types';


//container/wrapper class
class SuggestionList extends Component {
 

render(){
  return(
    

    <ul 
    className={mainClass + '-suggestions'}
    style = {combineStyles(ulStyle,this.props.ulStyle)}
    >

    {this.props.filteredData.map((suggestion,index)=>{
       return(

         <Suggestion 
         suggestion = {suggestion}
         key = {index}
         liStyle = {this.props.liStyle}

         result = {this.props.result}
         clickSelection = {this.props.clickSelection}
         />



       );

    })}
    </ul>


  );

   
  
  }

}

//propTypes
SuggestionList.propTypes = {
  ulStyle: propTypes.object,
  liStyle: propTypes.object,
  filteredData: propTypes.any.isRequired,
  result: propTypes.func.isRequired,
  clickSelection: propTypes.func.isRequired
}


export default SuggestionList;
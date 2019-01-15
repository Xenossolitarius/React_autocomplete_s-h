import React, {Component} from "react";
import {ulStyle,mainClass} from './consts';
import {combineStyles} from './helpers'
import Suggestion from './Suggestion'



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



export default SuggestionList;
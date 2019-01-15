import React, {Component} from "react";
import {liStyle,mainClass} from './consts';
import {combineStyles} from './helpers';
import propTypes from 'prop-types';



class Suggestion extends Component {
  constructor(props){
    super(props);

    this.returnSelection = this.returnSelection.bind(this);
  }
 

returnSelection(e){
  this.props.result(this.props.suggestion);
  this.props.clickSelection(this.props.suggestion);
  
}


render(){
    
    const {suggestion} = this.props;

  return(
 
         <li 
         className = {mainClass + '-suggestion'}
         style = {combineStyles(liStyle,this.props.liStyle)}
         

         onClick = {this.returnSelection}
         >
          {suggestion}
         </li>

       

    )}
    
  
  }

  //propTypes
  Suggestion.propTypes = {
    suggestion: propTypes.string.isRequired,
    liStyle: propTypes.object,
    result: propTypes.func.isRequired,
    clickSelection: propTypes.func.isRequired
  }


export default Suggestion;
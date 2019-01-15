import React from "react";
import {ulStyle,liStyle,mainClass} from './consts';



function SuggestionList (props) {
  let combineUlStyle;
  let combineLiStyle;

  if(props.ulStyle !== undefined ){
    combineUlStyle = {...ulStyle, ...props.ulStyle};
  }else{
    combineUlStyle = ulStyle;
  }

  if(props.liStyle !== undefined ){
    combineLiStyle = {...liStyle, ...props.liStyle};
  }else{
    combineLiStyle = liStyle;
  }


  return(
    <ul 
    className={mainClass + '-suggestions'}
    style = {combineUlStyle}
    >

    {props.filteredData.map((suggestion,index)=>{
       return(
         <li 
         className={mainClass + '-suggestion'}
         style = {combineLiStyle}
         key = {index}
         >
          {suggestion}
         </li>

       );

    })}
    </ul>
  );

   
  
  }



export default SuggestionList;
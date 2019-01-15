import React from "react";


function SuggestionList (props) {


  return(
    <ul className="suggestions">
    {props.filteredData.map((suggestion,index)=>{
       return(
         <li key = {index}>
          {suggestion}
         </li>

       );

    })}
    </ul>
  );

   
  
  }


export default SuggestionList;
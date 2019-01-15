//default search function wrapper
function defaultSearchFunction (userInput){
    
    return  function(data) {
        return data.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    } 

}
//style combination via spread 
function combineStyles(mainStyle, propStyle){


    if(propStyle !== undefined ){
        return {...mainStyle, ...propStyle};
      }else{
        return mainStyle;
      }


}

export {
    defaultSearchFunction,
    combineStyles
}








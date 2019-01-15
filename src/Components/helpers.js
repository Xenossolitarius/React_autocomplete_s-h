export default function defaultSearchFunction (userInput){
    
    return  function(data) {
        return data.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    } 

}





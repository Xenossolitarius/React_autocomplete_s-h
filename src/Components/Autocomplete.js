import React, { Component} from "react";
import SuggestionList from './SuggestionList';


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
  const filteredData = this.state.suggestions.filter(suggestion=>suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
  );

  this.setState({filtSuggestions: filteredData});

}

  render() {

    const {onSingleClick,onType} = this;
       
    return (
      <div className = "autocomplete">
        <input
          type="text"
          //onClick = {onSingleClick}
          onChange = {onType}
        />
        <SuggestionList filteredData={this.state.filtSuggestions} />
      </div>
    );
  }
}

export default Autocomplete;
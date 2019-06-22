import React from 'react';

import './search-pannel.css';

export default class SearchPannel extends React.Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return(
      <input type="text"
           className="form-control search-input"
           placeholder="type to search" 
           value={this.state.term}
           onChange={this.onSearchChange}/>
    )
  };
};  
  
import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { val: "Search Here!!" };

  onChangeEvent = (e) => {
    this.setState({
      val: e.target.value,
    });
  };

  onSubmitEvent = (e) => {
    e.preventDefault();
    this.props.onSearchSubmission(this.state.val);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmitEvent} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.val}
              onChange={this.onChangeEvent}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

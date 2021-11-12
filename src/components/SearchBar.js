import React from "react";

class SearchBar extends React.Component {
  state = { val: "Search Here!!" };

  onChangeEvent = (e) => {
    this.setState({
      val: e.target.value,
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.val}
              onChange={this.onChangeEvent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

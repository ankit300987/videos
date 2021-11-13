import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../API/youtube";

class App extends React.Component {
  onSearchInitated = val =>{
    youtube.get('/search',{
      params:{
        q: val
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmission={this.onSearchInitated}/>
      </div>
    );
  }
}

export default App;

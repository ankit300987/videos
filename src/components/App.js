import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../API/youtube";
import VideoList from "./VideoList";


class App extends React.Component {
  state = {video:[]};

  onSearchInitated = async val =>{
    const response = await youtube.get('/search',{
      params:{
        q: val
      }
    });
    this.setState({
      video: response.data.items
    });
    console.log(this.state.video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmission={this.onSearchInitated}/>
        <VideoList videos={this.state.video}/>
      </div>
    );
  }
}

export default App;

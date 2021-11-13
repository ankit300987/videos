import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../API/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { video: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchInitated('tom and jerry');
  }

  onSearchInitated = async (val) => {
    const response = await youtube.get("/search", {
      params: {
        q: val,
      },
    });
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelected = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmission={this.onSearchInitated} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelected}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

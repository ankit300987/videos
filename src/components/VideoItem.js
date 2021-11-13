import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} key={video.etag} className="video-item item">
      <img
        className="video-item ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className='video-title'>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;

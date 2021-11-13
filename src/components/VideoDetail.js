import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No Video Selected</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
        <div className='ui embed'>
            <iframe src={videoSrc} allowFullScreen/>
        </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>
          {video.snippet.description}
      </p>
    </div>
  );
};

export default VideoDetail;

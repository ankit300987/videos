import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} video={video}/>;
    });

    return (
        <div className='video-list ui relaxed divided list'>{videoItems}</div>
    );
}

export default VideoList;
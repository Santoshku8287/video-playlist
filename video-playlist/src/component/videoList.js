import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderList = videos.map((video) => {
        return (
            <div className="ui relaxed divided list">
                 <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
            </div>);
    });

    return <div>{renderList}</div>
}

export default VideoList;
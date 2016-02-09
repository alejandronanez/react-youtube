import React from 'react';
import VideoListItem from './video-list-item';

function renderListItems(videos) {
    return videos.map((video) => {
        return  <VideoListItem key={video.etag} video={video} />;
    });
}

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {renderListItems(props.videos)}
        </ul>
    );
};

export default VideoList;

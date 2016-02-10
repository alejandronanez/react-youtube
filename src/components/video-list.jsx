import React from 'react';
import VideoListItem from './video-list-item';

function renderListItems(props) {
    return props.videos.map((video) => {
        return  <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={props.onVideoSelect}
                />;
    });
}

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {renderListItems(props)}
        </ul>
    );
};

export default VideoList;

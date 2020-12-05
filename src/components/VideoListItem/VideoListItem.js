import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const videoTitle = video.snippet.title;
  const videoImageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={videoImageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <span>{videoTitle}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

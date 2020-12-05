import React, { FunctionComponent } from "react";
import VideoListItem from "../VideoListItem/VideoListItem";

interface IProps {
  videos: Video[];
  onVideoSelect: (selectedVideo: Video) => void;
}

const VideoList: FunctionComponent<IProps> = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect} />;
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;

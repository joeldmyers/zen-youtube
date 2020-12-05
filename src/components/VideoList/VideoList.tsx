import React from "react";
import VideoListItem from "../VideoListItem/VideoListItem";

interface Video {
  id: {
    videoId: string;
  };
  etag: number;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

interface IProps {
  videos: Video[];
  onVideoSelect: (selectedVideo: Video) => void;
}

const VideoList = ({ videos, onVideoSelect }: IProps) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;

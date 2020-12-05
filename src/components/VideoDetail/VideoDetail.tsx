import React, { FunctionComponent } from "react";
import { Video } from "../../../types/interfaces";

interface IProps {
  video: Video;
  youtubeErrorMessage: string;
}

const VideoDetail: FunctionComponent<any> = ({ video, youtubeErrorMessage }: IProps) => {
  const videoId = video ? video.id.videoId : "";
  const videoTitle = video ? video.snippet.title : "";
  const videoDescription = video ? video.snippet.description : "";
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={videoUrl} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>
          <h4>{videoTitle}</h4>
        </div>
        <div>
          <p>{videoDescription}</p>
          {youtubeErrorMessage && <p className="error-msg">{youtubeErrorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

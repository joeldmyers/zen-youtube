import React, { FunctionComponent, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";
import "./App.scss";
import { Provider } from "react-redux";
import store from "../store";
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/VideoList/VideoList";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import starterVideos from "../constants/starter-videos";
import config from "../../config";
import { Video } from "../../types/interfaces";

const YOUTUBE_API_KEY = config.youtubeAPIKey;

const App: FunctionComponent = () => {
  const [videos, setVideos] = useState(starterVideos);
  const [selectedVideo, setSelectedVideo] = useState(starterVideos[0]);
  const [youtubeErrorMessage, setYoutubeErrorMessage] = useState("");

  const searchYoutubeVideos = (term: string) => {
    setYoutubeErrorMessage("");
    const youtubeRootUrl = "https://www.googleapis.com/youtube/v3/search";

    const params = {
      part: "snippet",
      key: YOUTUBE_API_KEY,
      q: term,
      type: "video",
    };

    axios
      .get(youtubeRootUrl, { params })
      .then((youtubeResponse: any) => {
        setVideos(youtubeResponse.data.items);
        setSelectedVideo(youtubeResponse.data.items[0]);
      })
      .catch((error) => {
        setYoutubeErrorMessage("Sorry! You hit Youtube's annoying new API daily quota - try again tomorrow");
      });
  };

  const debouncedSearch = debounce((term) => {
    searchYoutubeVideos(term);
  }, 500);

  return (
    <Provider store={store}>
      <main className="container">
        <div className="main-app">
          <h3>Zen Youtube</h3>
          <p>Search without distractions...</p>
          <SearchBar onSearchTermChange={searchYoutubeVideos} />
          <VideoDetail video={selectedVideo} youtubeErrorMessage={youtubeErrorMessage} />
          <VideoList onVideoSelect={(selectedVideo: Video) => setSelectedVideo(selectedVideo)} videos={videos} />
        </div>
      </main>
    </Provider>
  );
};

export default App;

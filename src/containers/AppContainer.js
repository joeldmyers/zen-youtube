import React, { useState } from "react";
import YTSearch from "youtube-api-search";
import { debounce } from "lodash";
import "./App.scss";
import { Provider } from "react-redux";
import store from "../store";
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/VideoList/VideoList";
import VideoDetail from "../components/VideoDetail/VideoDetail";

const YOUTUBE_API_KEY = "AIzaSyAJhfL9mmBo6qs3QCAf4ZjGrX07XIUFu00";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchYoutubeVideos = (term) => {
    YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videoResults) => {
      setVideos(videoResults);
      setSelectedVideo(videos[0]);
    });
  };

  return (
    <Provider store={store}>
      <main className="container">
        <div className="main-app">
          <h3>Zen Youtube</h3>
          <p>Search without distractions...</p>
          <SearchBar onSearchTermChange={searchYoutubeVideos} />
          <VideoDetail video={selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => setSelectedVideo(selectedVideo)}
            videos={videos}
          />
        </div>
      </main>
    </Provider>
  );
};

export default App;

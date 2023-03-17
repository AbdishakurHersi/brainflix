import VideoSideBar from "../../../components/VideoSideBar/VideoSideBar";
import "../../../App";
import VideoList from "../../../components/VideoList/VideoList";
import Hero from "../../../components/Hero/Hero";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VideoPlayer.scss";
function VideoPlayer() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const { videoId } = useParams();
  console.log(process.env.REACT_APP_API_URL);
  //https://project-2-api.herokuapp.com/videos/?api_key=9a394b9c-6c4f-4413-bd66-603a19fcc11a

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/videos`).then(({ data }) => {
      setCurrentVideo(data);
    });
  }, []);

  // REACT_APP_API_URL="http://localhost:8000";

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/videos`)
  //     .then((response) => {
  //       console.log(response.data);
  //       // setCurrentVideo(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  if (currentVideo === null) {
    return <h1>...Loading</h1>;
  }
  const selectedVideoId = videoId || currentVideo[0].id;
  const videoToDisplay = currentVideo.find(
    (video) => video.id === selectedVideoId
  );
  return (
    <section>
      <Hero image={videoToDisplay.image} />
      <div className="parent">
        <div className="parent__video">
          <VideoList idOfVideoToDisplay={videoToDisplay.id} />
        </div>
        <div className="parent__side">
          <VideoSideBar
            videoToDisplay={videoToDisplay}
            videoData={currentVideo}
          />
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;

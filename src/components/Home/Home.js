import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import VideoList from "../VideoList/VideoList";
import VideoSideBar from "../VideoSideBar/VideoSideBar";
// import data from "../../data/video-details.json";
// import datalist from "../../data/videos.json";
import "./Home.scss";
// import Header from "./components/Header/Header";

// import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
// import data from "./data/video-details.json";
// import datalist from "./data/videos.json";
// import "./App.scss";
// import VideoList from "./components/VideoList/VideoList";
// import Hero from "./components/Hero/Hero";

function App() {
  // const [currentVideo, setCurrentVideo] = useState(datalist[0]);
  // function displayVideo(clickedVideoId) {
  //   //we have a video ID:
  //   //we need to find the video inside datalist that has that ID
  //   //to update the state
  //   const newVideo = datalist.find((video) => video.id === clickedVideoId);
  //   setCurrentVideo(newVideo);
  // const [currentVideo, setCurrentVideo] = useState(datalist[0]);
  // function displayVideo(clickedVideoId) {
  //   // we have a video ID:
  //   // we need to find the video inside datalist that has that ID
  //   // to update the state
  //   const newVideo = datalist.find((video) => video.id === clickedVideoId);
  //   setCurrentVideo(newVideo);
  // }
  ////////////////////////////////
  const api_url =
    // "https://project-2-api.herokuapp.com/videos/?api_key=9a394b9c-6c4f-4413-bd66-603a19fcc11a";
    "https://project-2-api.herokuapp.com/videos/?api_key=9a394b9c-6c4f-4413-bd66-603a19fcc11a";
  const [currentVideo, setCurrentVideo] = useState([]);
  useEffect(() => {
    axios
      .get(api_url)

      .then((resp) => {
        setCurrentVideo(resp.data[0]);
        console.log(resp.data);
      })
      .catch((error) => {
        <h1>hi</h1>;
      });
  }, []);
  console.log({ currentVideo });

  // function displayVideo(clickedVideoId) {
  //   //we have a video ID:
  //   //we need to find the video inside datalist that has that ID
  //   //to update the state
  //   const newVideo = datalist.find((video) => video.id === clickedVideoId);
  //   setCurrentVideo(newVideo);
  // }
  return (
    <>
      {/* <Header /> */}
      <Hero image={currentVideo.image} />
      <div className="parent">
        <div className="parent__video">
          {/* <VideoList currentVideo={currentVideo} data={data} />
              console.log(currentVideo);   
          <VideoList currentVideo={currentVideo} data={currentVideo} /> */}
        </div>
        {/* <div className="parent__side">
          <VideoSideBar
            setCurrentVideo={setCurrentVideo}
        
            displayVideo={displayVideo}
            currentVideo={currentVideo}
            datalist={datalist}
          />
        </div> */}
      </div>
    </>
    // <>
    //   <ol>
    //     {currentVideo.map((n) => {
    //       return <li>{n.id}</li>;
    //     })}
    //   </ol>
    // </>
  );
}

export default App;

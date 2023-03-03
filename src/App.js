import Header from "./components/Header/Header";
import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
import data from "./data/video-details.json";
import datalist from "./data/videos.json";
import "./App.scss";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
function App() {
  const [currentVideo, setCurrentVideo] = useState(datalist[0]);
  function displayVideo(clickedVideoId) {
    //we have a plant ID: AS23R5-SDF14
    //we need to find the plant inside plantData that has that ID
    //to update the state
    const newVideo = datalist.find((video) => video.id === clickedVideoId);
    setCurrentVideo(newVideo);
  }
  let change;
  return (
    // <>
    //   <Header />
    //   <Hero />
    //   <div className="desktop">
    //     <div className="desktop__main">
    //       <VideoDescription />
    //       <Form />
    //       <Comments data={data} />
    //     </div>
    //     <div className="desktop__side">
    //       <VideoSideBar datalist={datalist} change={change} />
    //     </div>
    //   </div>
    // </>
    <>
      <Header />
      {/* setCurrentPlant={setCurrentPlant}displayPlant={displayPlant} currentPlant=
      {currentPlant} plantsData={plantsData} */}
      {/* <VideoList
        setCurrentVideo={setCurrentVideo}
        displayVideo={displayVideo}
        currentVideo={currentVideo}
        datalist={datalist}
      />
      <VideoSideBar datalist={datalist} change={change} /> */}
      <VideoList currentVideo={currentVideo} data={data} />
      <VideoSideBar
        setCurrentVideo={setCurrentVideo}
        displayVideo={displayVideo}
        currentVideo={currentVideo}
        datalist={datalist}
      />
    </>
  );
}

export default App;

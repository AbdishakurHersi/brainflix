import Header from "./components/Header/Header";
import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
import data from "./data/video-details.json";
import datalist from "./data/videos.json";
import "./App.scss";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
import Hero from "./components/Hero/Hero";

function App() {
  const [currentVideo, setCurrentVideo] = useState(datalist[0]);
  function displayVideo(clickedVideoId) {
    //we have a video ID:
    //we need to find the video inside datalist that has that ID
    //to update the state
    const newVideo = datalist.find((video) => video.id === clickedVideoId);
    setCurrentVideo(newVideo);
  }
  return (
    <>
      <Header />
      <Hero image={currentVideo.image} />
      <div className="parent">
        <div className="parent__video">
          <VideoList currentVideo={currentVideo} data={data} />
        </div>
        <div className="parent__side">
          <VideoSideBar
            setCurrentVideo={setCurrentVideo}
            displayVideo={displayVideo}
            currentVideo={currentVideo}
            datalist={datalist}
          />
        </div>
      </div>
    </>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
// import data from "./data/video-details.json";
// import datalist from "./data/videos.json";
// import "./App.scss";
// import VideoList from "./components/VideoList/VideoList";
// import { useState } from "react";
// import Hero from "./components/Hero/Hero";

// function App() {
//   const [currentVideo, setCurrentVideo] = useState(datalist[0]);
//   function displayVideo(clickedVideoId) {
//     const newVideo = datalist.find((video) => video.id === clickedVideoId);
//     setCurrentVideo(newVideo);
//   }
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home username={username} />} />
//         <Route path="/contact" element={<Contact username={username} />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<Product />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

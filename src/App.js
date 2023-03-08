// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import Header from "./components/Header/Header";
// import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
// import data from "./data/video-details.json";
// import datalist from "./data/videos.json";
// import "./App.scss";
// import VideoList from "./components/VideoList/VideoList";
// import Hero from "./components/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import VideoUpload from "./pages/Page/VideoUpload/VideoUpload";

function App() {
  // const [currentVideo, setCurrentVideo] = useState(datalist[0]);
  // function displayVideo(clickedVideoId) {
  //we have a video ID:
  //we need to find the video inside datalist that has that ID
  //to update the state
  // const newVideo = datalist.find((video) => video.id === clickedVideoId);
  // setCurrentVideo(newVideo);
  //////////////////////////////////
  // const api_url =
  //   "https://project-2-api.herokuapp.com/videos/?api_key=9a394b9c-6c4f-4413-bd66-603a19fcc11a";
  // const [currentVideo, setCurrentVideo] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get(api_url)

  //     .then((resp) => {
  //       setCurrentVideo(resp.data[0]);
  //       console.log(resp.data[0]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // function displayVideo(clickedVideoId) {
  //   //we have a video ID:
  //   //we need to find the video inside datalist that has that ID
  //   //to update the state
  //   const newVideo = datalist.find((video) => video.id === clickedVideoId);
  //   setCurrentVideo(newVideo);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoUpload />} />
        {/* <Route path="/contact" element={<Contact username={username} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />

        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

/* <Header />
      <Hero image={currentVideo.image} />
      <div className="parent">
        <div className="parent__video">
          <VideoList currentVideo={currentVideo} data={data} />
        </div>
        <div className="parent__side">
          <VideoSideBar
            setCurrentVideo={setCurrentVideo}
            // displayVideo={displayVideo}
            displayVideo={displayVideo}
            currentVideo={currentVideo}
            datalist={datalist}
          />
        </div>
      </div>  */

// <BrowserRouter>
//   <Header />
//   <Routes>
//     <Route path="/" element={<Home username={username} />} />
//     <Route path="/video" element={<Videos username={username} />} />
//     <Route path="/video/:videoId" element={<Video />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// </BrowserRouter>

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
// return (
//   <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home username={username} />} />
//       <Route path="/contact" element={<Contact username={username} />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/products/:productId" element={<Product />} />

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </BrowserRouter>
//   );
// }

// export default App//

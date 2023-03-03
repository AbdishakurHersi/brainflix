import Comments from "./components/Comments/Comments";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import VideoSideBar from "./components/VideoSideBar/VideoSideBar";
import data from "./data/video-details.json";
import datalist from "./data/videos.json";
import "./App.scss";
function App() {
  let change;
  return (
    <>
      <Header />
      <Hero />
      <div className="desktop">
        <div className="desktop__main">
          <VideoDescription />
          <Form />
          <Comments data={data} />
        </div>
        <div className="desktop__side">
          <VideoSideBar datalist={datalist} change={change} />
        </div>
      </div>
    </>
  );
}

export default App;

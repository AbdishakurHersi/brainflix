import Comments from "./components/Comments/Comments";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import data from "./data/video-details.json";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoDescription />
      <Form />
      <Comments data={data} />
    </>
  );
}

export default App;

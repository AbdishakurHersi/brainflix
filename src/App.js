import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import VideoUpload from "./pages/Page/VideoUpload/VideoUpload";
import NotFound from "./components/NotFound/NotFound";
import VideoPlayer from "./pages/Page/VideoPlayer/VideoPlayer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoPlayer />} />
        <Route path="/videoUpload" element={<VideoUpload />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

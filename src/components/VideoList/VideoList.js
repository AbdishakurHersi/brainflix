import "../../App.scss";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import "./VideoList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const VideoList = ({ idOfVideoToDisplay }) => {
  //check for ids. if they are the same then we know which video details to get
  // currentvideo:
  const [videoDetail, setVideoDetail] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = "https://project-2-api.herokuapp.com/";
  const API_KEY = "123";
  const getVideoDetailEndpoint = (videoId) => {
    return `${API_URL}videos/${videoId}?api_key=${API_KEY}`;
    // /videos/video:id
  };

  useEffect(() => {
    const VideoDetailEndpoint = getVideoDetailEndpoint(idOfVideoToDisplay);

    axios
      .get(VideoDetailEndpoint)
      .then(({ data }) => {
        setVideoDetail(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [idOfVideoToDisplay]);

  if (error) {
    return <h1>Error from api</h1>;
  }
  if (!videoDetail) {
    return <h1>Loading Plant Details</h1>;
  }

  const { title, channel, description, timestamp, views, likes, comments } =
    videoDetail;
  return (
    <div className="videoList">
      <div className="videoList__contain">
        <VideoDescription
          title={title}
          channel={channel}
          timestamp={timestamp}
          views={views}
          likes={likes}
          description={description}
        />
        <Form />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default VideoList;

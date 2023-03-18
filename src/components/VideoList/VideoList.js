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
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/videos/${idOfVideoToDisplay}`)
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
    videoDetail[0];
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

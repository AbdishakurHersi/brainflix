// import Hero from "../Hero/Hero";
// import "../../App.scss";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "../Home/Home";
// import VideoDescription from "../VideoDescription/VideoDescription";
// import Comments from "../Comments/Comments";
// import Form from "../Form/Form";
// import "./VideoList.scss";
// const VideoList = ({ data, currentVideo }) => {
//   //check for ids. if they are the same then we know which video details to get

//   console.log({ currentVideo });
//   // currentvideo:
//   function getVideoDetails() {
//     const currentVideoId = currentVideo.id;
//     const currentVideoDetails = data.find((videoDetail) => {
//       return videoDetail.id === currentVideoId;
//     });
//     return currentVideoDetails;
//   }
//   const { title, channel, description, timestamp, views, likes, comments } =
//     getVideoDetails();
//   return (
//     //Videolist component
//     <div className="videoList">
//       <div className="videoList__contain">
//         <VideoDescription
//           title={title}
//           channel={channel}
//           timestamp={timestamp}
//           views={views}
//           likes={likes}
//           description={description}
//         />
//         <Form />
//         <Comments comments={comments} />
//       </div>
//     </div>
//   );
// };

// export default VideoList;

// const VideoList = ({ currentVideo }) => {
//check for ids. if they are the same then we know which video details to get

// const api_url =
//   "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=9a394b9c-6c4f-4413-bd66-603a19fcc11a";
// const [currentVideo, setCurrentVideo] = useState([]);
// useEffect(() => {
//   axios
//     .get(api_url)

//     .then((resp) => {
//       setCurrentVideo(resp.data);
//     })
//     .catch((error) => {
//       <h1>hi</h1>;
//     });
// }, []);

// currentvideo:
// function getVideoDetails() {
//   const currentVideoId = currentVideo.id;
//   const currentVideoDetails = data.find((videoDetail) => {
//     return videoDetail.id === currentVideoId;
//   });
//   return currentVideoDetails;
// }
// const { title, channel, description, timestamp, views, likes, comments } =
//   getVideoDetails();

//   return (
//     //Videolist component
//     <div className="videoList">
//       <div className="videoList__contain">
//         <VideoDescription
//           title={currentVideo.title}
//           channel={currentVideo.channel}
//           timestamp={currentVideo.timestamp}
//           views={currentVideo.views}
//           likes={currentVideo.likes}
//           description={currentVideo.description}
//         />
//         <Form />
//         <Comments comments={currentVideo.comments} />
//       </div>
//     </div>
//   );
// };

// export default VideoList;

// import Hero from "../Hero/Hero";
// import "../../App.scss";
// import VideoDescription from "../VideoDescription/VideoDescription";
// import Comments from "../Comments/Comments";
// import Form from "../Form/Form";
// import "./VideoList.scss";
// const VideoList = ({ data, currentVideo }) => {
//   //check for ids. if they are the same then we know which video details to get
//   // currentvideo:
//   function getVideoDetails() {
//     const currentVideoId = currentVideo.id;
//     const currentVideoDetails = data.find((videoDetail) => {
//       return videoDetail.id === currentVideoId;
//     });
//     return currentVideoDetails;
//   }
//   const { title, channel, description, timestamp, views, likes, comments } =
//     getVideoDetails();
//   return (
//     //Videolist component
//     <div className="videoList">
//       <div className="videoList__contain">
//         <VideoDescription
//           title={title}
//           channel={channel}
//           timestamp={timestamp}
//           views={views}
//           likes={likes}
//           description={description}
//         />
//         <Form />
//         <Comments comments={comments} />
//       </div>
//     </div>
//   );
// };

// export default VideoList;

import "../../App.scss";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import "./VideoList.scss";
import Hero from "../Hero/Hero";

import axios from "axios";
import { useEffect, useState } from "react";

const VideoList = ({ idOfVideoToDisplay }) => {
  //check for ids. if they are the same then we know which video details to get
  // currentvideo:
  console.log(idOfVideoToDisplay);
  const [videoDetail, setVideoDetail] = useState(null);
  const [error, setError] = useState(null);
  console.log(idOfVideoToDisplay);
  const API_URL = "https://project-2-api.herokuapp.com/";
  const API_KEY = "123";
  const getVideoDetailEndpoint = (videoId) => {
    return `${API_URL}videos/${videoId}?api_key=${API_KEY}`;
  };

  useEffect(() => {
    console.log("ran effect in plantinfo");
    const VideoDetailEndpoint = getVideoDetailEndpoint(idOfVideoToDisplay);
    console.log(VideoDetailEndpoint);
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
  console.log(videoDetail);
  const {
    image,
    title,
    channel,
    description,
    timestamp,
    views,
    likes,
    comments,
  } = videoDetail;
  return (
    //Videolist component
    <>
      <div className="videoList">
        <Hero image={image} />
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
    </>
  );
};

export default VideoList;

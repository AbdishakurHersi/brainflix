// import Hero from "../Hero/Hero";
// import "../../App.scss";
import "../Home/Home";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import "./VideoList.scss";
const VideoList = ({ data, currentVideo }) => {
  //check for ids. if they are the same then we know which video details to get
  // currentvideo:
  function getVideoDetails() {
    const currentVideoId = currentVideo.id;
    const currentVideoDetails = data.find((videoDetail) => {
      return videoDetail.id === currentVideoId;
    });
    return currentVideoDetails;
  }
  const { title, channel, description, timestamp, views, likes, comments } =
    getVideoDetails();
  return (
    //Videolist component
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

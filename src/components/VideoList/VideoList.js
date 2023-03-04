import Hero from "../Hero/Hero";
import "../../App.scss";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
import "./VideoList.scss";
const VideoList = ({ data, currentVideo }) => {
  function getVideoDetails() {
    //check for ids. if they are the same then we know which plant details to get
    // currentPlant:
    /*
         {
            "id": "d801af14-8f94-4a51-b7f3-9d223fa3c201",
            "name": "Dainty"
        }
        */
    const currentVideoId = currentVideo.id;
    //const {id} = currentPlant;
    const currentVideoDetails = data.find((videoDetail) => {
      return videoDetail.id === currentVideoId;
    });
    return currentVideoDetails;
  }
  const {
    image,
    title,
    channel,
    description,
    timestamp,
    views,
    likes,
    comments,
  } = getVideoDetails();
  console.log(getVideoDetails());
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

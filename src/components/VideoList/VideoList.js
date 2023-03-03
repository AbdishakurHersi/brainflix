import Hero from "../Hero/Hero";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
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
    <>
      <Hero image={image} />
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
    </>
  );
};

export default VideoList;

// const PlantInfo = ({ currentPlant, videoDetailsData }) => {
//   //we have currentPlant which has no information (description, age, image)
//   //we have videoDetails which do have all the information
//   function getvideoDetails() {
//     //check for ids. if they are the same then we know which plant details to get
//     // currentPlant:
//     /*
//          {
//             "id": "d801af14-8f94-4a51-b7f3-9d223fa3c201",
//             "name": "Dainty"
//         }
//         */
//     const currentVideoId = currentPlant.id;
//     //const {id} = currentPlant;
//     const currentVideoDetails = videoDetailsData.find((videoDetail) => {
//       return videoDetail.id === currentVideoId;
//     });
//     return currentVideoDetails;
//   }

//   const { name, avatar, description, age } = getvideoDetails();
//   return (
//     <div className="plant-details">
//       <h1>{name}</h1>
//       <img
//         src={avatar}
//         alt="plant on the floor"
//         className="plant-details__photo"
//       />
//       <p>{age}</p>
//       <p>{description}</p>
//     </div>
//   );
// };

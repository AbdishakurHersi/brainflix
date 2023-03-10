import "../../pages/Page/VideoPlayer/VideoPlayer.scss";
import "./VideoSideBar.scss";
import { Link } from "react-router-dom";
const VideoSideBar = ({ videoToDisplay, videoData }) => {
  console.log(videoToDisplay, videoData);
  return (
    //Video side list component
    <div className="videoside">
      <p className="videoside__title">NEXT VIDEOS</p>
      {videoData.map(({ id, channel, image, title }) => {
        //checking for ID'S

        if (id !== videoToDisplay.id) {
          return (
            <div key={id}>
              <Link className="videoside__container" to={`/video/${id}`}>
                <div className="videoside__imagecontainer">
                  <img
                    className="videoside__image"
                    src={image}
                    alt="sideimage"
                  />
                </div>
                <div className="videoside__text">
                  <p className="videoside__header">{title}</p>
                  <p className="videoside__channel">{channel}</p>
                </div>
              </Link>
            </div>
          );
        } else {
          // will return empty fragmenet
          return null;
        }
      })}
    </div>
  );
};

export default VideoSideBar;

import { Link } from "react-router-dom";
import VideoSideImage from "../VideoSideImage/VideoSideImage";
import "../../pages/Page/VideoPlayer/VideoPlayer.scss";
import "./VideoSideBar.scss";
const VideoSideBar = ({ videoToDisplay, videoData }) => {
  return (
    <div className="videoside">
      <p className="videoside__title">NEXT VIDEOS</p>
      {videoData.map(({ id, channel, image, title }) => {
        if (id !== videoToDisplay.id) {
          return (
            <div key={id}>
              <Link className="videoside__container" to={`/video/${id}`}>
                <VideoSideImage image={image} />
                <div className="videoside__text">
                  <p className="videoside__header">{title}</p>
                  <p className="videoside__channel">{channel}</p>
                </div>
              </Link>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default VideoSideBar;

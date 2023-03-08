import "./VideoSideBar.scss";
// import "../../App.scss";
import "../Home/Home";
const VideoSideBar = ({
  setCurrentVideo,
  datalist,
  displayVideo,
  currentVideo,
}) => {
  return (
    <div className="videoside">
      <p className="videoside__title">NEXT VIDEOS</p>
      {datalist.map((number) => {
        //checking for ID'S
        if (number.id !== currentVideo.id) {
          return (
            <div
              className="videoside__container"
              onClick={function () {
                displayVideo(number.id);
                //remove from the list
              }}
            >
              <div className="videoside__imagecontainer">
                <img
                  className="videoside__image"
                  src={number.image}
                  alt="sideimage"
                />
              </div>
              <div className="videoside__text">
                <p className="videoside__header">{number.title}</p>
                <p className="videoside__channel">{number.channel}</p>
              </div>
            </div>
          );
        } else {
          // will return empty fragmenet
          return <></>;
        }
      })}
    </div>
  );
};

export default VideoSideBar;

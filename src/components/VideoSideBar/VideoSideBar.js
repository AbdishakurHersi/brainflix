import "./VideoSideBar.scss";
const VideoSideBar = ({
  setCurrentVideo,
  datalist,
  displayVideo,
  currentVideo,
}) => {
  return (
    <div className="videoside">
      {/* <p className="videoside__title">NEXT VIDEOS</p>
      {datalist.map((number) => {
        return (
          <div className="videoside__container" onclick={change}>
            <img
              className="videoside__image"
              src={number.image}
              alt="sideimage"
            />

            <div className="videoside__text">
              <p className="videoside__header">{number.title}</p>
              <p className="videoside__channel">{number.channel}</p>
            </div>
          </div>
        );
      })} */}
      <p className="videoside__title">NEXT VIDEOS</p>
      {datalist.map((number) => {
        if (number.id !== currentVideo.id) {
          return (
            <div
              className="videoside__container"
              onClick={function () {
                displayVideo(number.id);
                //remove from the list
              }}
            >
              <img
                className="videoside__image"
                src={number.image}
                alt="sideimage"
              />

              <div className="videoside__text">
                <p className="videoside__header">{number.title}</p>
                <p className="videoside__channel">{number.channel}</p>
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default VideoSideBar;

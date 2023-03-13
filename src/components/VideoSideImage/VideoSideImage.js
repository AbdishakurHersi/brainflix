import "./VideoSideImage.scss";
const VideoSideImage = ({ image }) => {
  return (
    <div className="image">
      <img className="image__container" src={image} alt="sideimage" />
    </div>
  );
};

export default VideoSideImage;

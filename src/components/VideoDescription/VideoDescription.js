import "./VideoDescription.scss";
import data from "../../data/video-details.json";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

const VideoDescription = () => {
  // function time(value) {
  //   const time = new Date().getTime();
  //   value.time = "Milliseconds = " + time;
  //   const date = new Date(time);
  //   return date.toDateString();
  // }
  return (
    <section className="video">
      <h1 className="video__title">{data[0].title}</h1>
      <div className="video__border"></div>
      <div className="video__container">
        <div className="video__author">
          <p className="video__channel">{data[0].channel}</p>
          <p className="video__timestamp">{data[0].timestamp}</p>
        </div>
        <div className="video__attraction">
          <div className="video__channel">
            <img src={views} alt="views logo" className="video__logoviews" />
            <p className="video__views">{data[0].views}</p>
          </div>
          <div>
            <img src={likes} alt="likes logo" className="video__logoviews" />
            <p className="video__views">{data[0].likes}</p>
          </div>
        </div>
      </div>
      <div className="video__borders"></div>
      <p className="video__description">{data[0].description}</p>
    </section>
  );
};

export default VideoDescription;

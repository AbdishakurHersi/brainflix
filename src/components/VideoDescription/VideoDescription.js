import view from "../../assets/Icons/views.svg";
import likess from "../../assets/Icons/likes.svg";
import "./VideoDescription.scss";
import "../../pages/Page/VideoPlayer/VideoPlayer";

const VideoDescription = ({
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) => {
  function time(timestamp) {
    const date = new Date(timestamp);
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "2-digit" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    return `${month}/${day}/${year}`;
  }
  return (
    <section className="video">
      <h1 className="video__title">{title}</h1>
      <div className="video__border"></div>
      <div className="video__container">
        <div className="video__author">
          <p className="video__channel">{channel}</p>
          <p className="video__timestamp">{time(new Date(timestamp))}</p>
        </div>
        <div className="video__attraction">
          <div className="video__channel">
            <img src={view} alt="views icon" className="video__logoviews" />
            <p className="video__views">{views}</p>
          </div>
          <div>
            <img src={likess} alt="likes logo" className="video__logoviews" />
            <p className="video__views">{likes}</p>
          </div>
        </div>
      </div>
      <div className="video__borders"></div>
      <p className="video__description">{description}</p>
    </section>
  );
};

export default VideoDescription;

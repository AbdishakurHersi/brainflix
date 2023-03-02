import "./Hero.scss";
import data from "../../data/video-details.json";
const Hero = () => {
  return (
    <div className="hero">
      <video
        className="hero__image"
        poster={data[0].image}
        loop
        controls
        display
      ></video>
    </div>
  );
};

export default Hero;

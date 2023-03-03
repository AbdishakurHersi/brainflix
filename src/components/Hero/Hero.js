import "./Hero.scss";
import data from "../../data/video-details.json";
const Hero = ({ image }) => {
  return (
    <div className="hero">
      <video
        className="hero__image"
        // poster={data[0].image}
        poster={image}
        loop
        controls
        display
      ></video>
    </div>
  );
};

export default Hero;

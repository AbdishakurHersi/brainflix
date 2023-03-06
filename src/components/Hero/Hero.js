import "./Hero.scss";
import "../../App.scss";
const Hero = ({ image }) => {
  //Hero component
  return (
    <section className="hero">
      <video
        className="hero__image"
        poster={image}
        loop
        controls
        display
      ></video>
    </section>
  );
};

export default Hero;

import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import "../Component.scss";
function Component() {
  return (
    <nav className="navigation">
      <img
        className="navigation__logo"
        src={brainflixlogo}
        alt="BrainFlix Logo"
      />
      <div className="navigation__header">
        <button className="navigation__searchbar">
          <div className="navigation__searchbarleft">
            <img
              className="navigation__searchlogo"
              src={search}
              alt="search Logo"
            />
            <p className="navigation__searchtext"> Search </p>
          </div>
        </button>
        <button className="navigation__uploadbar">
          <div className="navigation__uploadstyle">
            <img
              className="navigation__uploadlogo"
              src={upload}
              alt="upload Logo"
            />
            <p className="navigation__uploadtext">UPLOAD</p>
          </div>
        </button>
        <img
          className="navigation__picture"
          src={picturemohan}
          alt="picture of a person"
        />
      </div>
    </nav>
  );
}
export default Component;

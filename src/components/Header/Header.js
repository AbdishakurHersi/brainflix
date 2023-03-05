import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg";
import "../../App.scss";
import search from "../../assets/Icons/search.svg";
import avatarmohan from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__container">
          <img
            className="navigation__logo"
            src={brainflixlogo}
            alt="BrainFlix Logo"
          />
        </div>
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
            src={avatarmohan}
            className="navigation__picture"
            alt="avatarperson"
          />
        </div>
      </nav>
    </header>
  );
}
export default Header;

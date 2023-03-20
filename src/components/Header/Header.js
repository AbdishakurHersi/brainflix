import { Link } from "react-router-dom";
import brainflixlogo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import avatarmohan from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import "../../pages/Page/VideoPlayer/VideoPlayer";
import "./Header.scss";

function Header() {
  return (
    //Navbar component
    <header className="navigation">
      <nav className="navigation__section">
        <div className="navigation__container">
          <Link to="/">
            <img
              className="navigation__logo"
              src={brainflixlogo}
              alt="BrainFlix Logo"
            />
          </Link>
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
              <Link className="navigation__uploadtext" to="/videoUpload">
                <p>UPLOAD</p>
              </Link>
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

import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatarSvg from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/">
        <img src={logo} alt="BrainFlix Logo" className="header__sitelogo" />
        </Link>
        <nav className="header__nav">
          <div className="header__wrapper">
            <div className="header__searchbar">
              <input
                type="text"
                placeholder="Search"
                name="Searchbar"
                className="header__searchbar-input"
              />
            </div>
            <div className="header__avatar header__avatar-mobile">
              <img
                src="#"
                alt="User Avatar"
                className="header__avatar-photo"
              />
            </div>
          </div>
          <div className="header__upload">
            <Link to="/upload">
              <button
                className="header__upload-btn"
                type="button"
                name="Upload"
              >
                UPLOAD
              </button>
              </Link>
            <div className="header__avatar header__avatar-tablet">
              <img
                src={avatarSvg}
                alt="User Avatar"
                className="header__avatar-photo"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
import React from "react";
import "./Header.scss";
import avatarSvg from "../../assets/images/Mohan-muruge.jpg";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={brainFlixLogo} alt="Brainflix" className="header__sitelogo" />
      <div className="header__wrapper">
        <div className="header__searchbar">
          <input
            type="text"
            placeholder="Search"
            name="Searchbar"
            class="header__searchbar-input"
          />
        </div>
        <div className="header__avatar">
          <img
            src={avatarSvg}
            alt="User Avatar"
            className="header__avatar-photo"
          />
        </div>
      </div>
      <div className="header__upload">
        <button className="header__upload-btn" type="text" name="Upload">
          UPLOAD
        </button>
      </div>
    </header>
  );
}

export default Header;
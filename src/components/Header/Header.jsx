import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Header.scss";
import avatarSvg from "../../assets/images/Mohan-muruge.jpg";

function Header({ logo }) {
  return (
    <header className="header">
      <Link to="/"> {/* Make the logo clickable */}
        <img src={logo} alt="BrainFlix Logo" className="header__sitelogo" />
      </Link>
      <div className="header__nav">
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
              src={avatarSvg}
              alt="User Avatar"
              className="header__avatar-photo"
            />
          </div>
        </div>
        <div className="header__upload">
          <Link to="/upload"> {/* Wrap the button in a Link */}
            <button className="header__upload-btn" type="button" name="Upload">
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
      </div>
    </header>
  );
}

export default Header;



// import React from "react";
// import "./Header.scss";
// import avatarSvg from "../../assets/images/Mohan-muruge.jpg";
// import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";

// function Header() {
//   return (
//     <header className="header">
//       <img src={brainFlixLogo} alt="Brainflix" className="header__sitelogo" />
//       <div className="header__nav">
//         <div className="header__wrapper">
//           <div className="header__searchbar">
//             <input
//               type="text"
//               placeholder="Search"
//               name="Searchbar"
//               className="header__searchbar-input"
//             ></input>
//           </div>
//           <div className="header__avatar header__avatar-mobile">
//             <img
//               src={avatarSvg}
//               alt="User Avatar"
//               className="header__avatar-photo"
//             />
//           </div>
//         </div>
//         <div className="header__upload">
//           <button className="header__upload-btn" type="text" name="Upload">
//             UPLOAD
//           </button>
//           <div className="header__avatar header__avatar-tablet">
//             <img
//               src={avatarSvg}
//               alt="User Avatar"
//               className="header__avatar-photo"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
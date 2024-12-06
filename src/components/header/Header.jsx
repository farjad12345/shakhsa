import React from "react";
import Profile from "../../assets/Profile.png"
import Vector from "../../assets/Vector.png"
import "./Header.css";
function Header() {
  return (
    <div className="header ">
        <div className="cantainer">     
      <div className="header-right">
      <img className="header-right-logo" src={Profile} />
      <div className="header-right-text">آروین ترکاشوند</div>
      </div>
      <div className="header-center">
        <div className="header-center-text">Shakhsa</div>
        <img className="header-center-logo" src={Vector}/>
        </div>
      <div className="header-left">
      <div className="header-left-text">Powered by</div>
      <div className="header-left-logo">AI</div>
      </div>
        </div>
    </div>
  );
}

export default Header;

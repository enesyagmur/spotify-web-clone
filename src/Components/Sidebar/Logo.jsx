import React from "react";
import { FaSpotify } from "react-icons/fa6";
import "./logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <FaSpotify className="logo-icon" /> <p>Spotify</p>
    </div>
  );
};

export default Logo;

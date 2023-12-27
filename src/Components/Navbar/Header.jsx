import React from "react";
import "./header.scss";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="header">
      <p>Searchbar</p>
      <Profile />
    </div>
  );
};

export default Header;

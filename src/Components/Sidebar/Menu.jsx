import React from "react";
import "./menu.scss";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Menu = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <MdHomeFilled className="menu-icon" /> <p>Home</p>
        </li>
        <li>
          <IoSearch className="menu-icon" />
          <p>Search</p>
        </li>
      </ul>
    </>
  );
};

export default Menu;

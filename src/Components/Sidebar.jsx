import React from "react";
import "./sidebar.scss";
import Menu from "./Sidebar/Menu";
import Logo from "./Sidebar/Logo";
import PlayLists from "./Sidebar/PlayLists";
import DownloadApp from "./Sidebar/DownloadApp";

const Sidebar = ({ setContent, content }) => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu setContent={setContent} content={content} />
      <PlayLists />
      <DownloadApp />
    </div>
  );
};

export default Sidebar;

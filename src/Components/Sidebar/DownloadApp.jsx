import React from "react";
import "./downloadApp.scss";
import { GoArrowDown } from "react-icons/go";

const DownloadApp = () => {
  return (
    <div className="download-app">
      <GoArrowDown className="download-app-icon" />
      <p> Download The App</p>
    </div>
  );
};

export default DownloadApp;

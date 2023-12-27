import React from "react";
import Navbar from "./Navbar";
import "./content.scss";
import Home from "../Wievs/Home";
import Search from "../Wievs/Search";
import Collection from "../Wievs/Collection";

const Content = ({ content }) => {
  if (content === "home") {
    return (
      <div className="content">
        <Navbar />
        <Home />
      </div>
    );
  } else if (content === "search") {
    return (
      <div className="content">
        <Navbar />
        <Search />
      </div>
    );
  } else if (content === "collection") {
    return (
      <div className="content">
        <Navbar />
        <Collection />
      </div>
    );
  }
};

export default Content;

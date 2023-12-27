import React from "react";
import "./menu.scss";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

import { IoIosHeartEmpty } from "react-icons/io";

const Menu = ({ setContent, content }) => {
  return (
    <>
      <ul className="menu">
        <li
          onClick={() => setContent("home")}
          className={content === "home" ? "active" : null}
        >
          <MdHomeFilled className="menu-icon" /> <p>Home</p>
        </li>
        <li
          onClick={() => setContent("search")}
          className={content === "search" ? "active" : null}
        >
          <IoSearch className="menu-icon" />
          <p>Search</p>
        </li>

        <li
          onClick={() => setContent("collection")}
          className={content === "collection" ? "active" : null}
        >
          <BiLibrary className="menu-icon" /> <p>Your Library</p>
        </li>

        <li
          onClick={() => setContent("createPlaylist")}
          className={content === "createPlaylist" ? "active" : null}
        >
          <AiOutlinePlus className="menu-icon" /> <p>Create Playlist</p>
        </li>

        <li
          onClick={() => setContent("likedSongs")}
          className={content === "likedSongs" ? "active" : null}
        >
          <IoIosHeartEmpty className="menu-icon" /> <p>Liked Songs</p>
        </li>
      </ul>
    </>
  );
};

export default Menu;

import React from "react";
import { IoLayersOutline } from "react-icons/io5";
import { IoLayersSharp } from "react-icons/io5";

const Library = () => {
  return (
    <div className="lg:w-[97%] min-h-[calc(100%-100px)] flex flex-col  bg-lightBg border-4 border-lightBg rounded-lg text-textColor pl-3 mt-2">
      <div className="w-full h-12 flex items-center text-xl hover:text-white cursor-pointer">
        <IoLayersSharp className="transform rotate-90" />
        <p className="text-sm pl-3 font-bold">Your Library</p>
      </div>

      <div className="w-full h-12 flex items-center justify-between">
        <button className="sidebar-library-button">Playlists</button>
        <button className="sidebar-library-button">Artists</button>
        <button className="sidebar-library-button">Albums</button>
        <button className="sidebar-library-button">Podcasts</button>
      </div>
    </div>
  );
};

export default Library;

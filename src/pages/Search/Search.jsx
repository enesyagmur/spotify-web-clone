import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Profile from "../../components/Profile";

const Search = () => {
  return (
    <div className="w-full min-h-screen bg-lightBg flex flex-col items-center">
      <div className="w-full h-28 flex items-start justify-between ">
        <IoSearchOutline className="ml-8 text-textColor text-lg absolute mt-6 z-20" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-4/12 h-8 bg-neutral-700 ml-6 mt-4 text-[11px] rounded-full pl-8 relative text-white"
        />

        <Profile />
      </div>
      <div className="w-[97%] flex flex-col text-white font-bold">
        <p className="w-full h-5 flex items-center text-white font-bold text-lg">
          Browse all
        </p>
      </div>
    </div>
  );
};

export default Search;

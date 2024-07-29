import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Pages = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-[97%] h-24 flex flex-col  bg-lightBg border-4 border-lightBg rounded-lg text-textColor pl-3 mt-2 text-xl">
      <div
        className="w-full h-1/2 flex justify-start items-center hover:text-white cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <GoHomeFill />
        <p className="text-sm font-bold pl-3"> Home</p>
      </div>
      <div
        className="w-full h-1/2 flex justify-start items-center hover:text-white cursor-pointer"
        onClick={() => navigate("/search")}
      >
        <FaSearch />
        <p className="text-sm font-bold pl-3">Search</p>
      </div>
    </div>
  );
};

export default Pages;

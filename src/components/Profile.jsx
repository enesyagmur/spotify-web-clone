import React from "react";
import { MdOutlineDownloading } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="w-2/12 h-6 flex items-center justify-between  mt-4 mr-4">
      <div className="w-7/12 h-full bg-black flex items-center justify-evenly rounded-lg text-textColor">
        <MdOutlineDownloading className="text-2xl" />
        <p className="text-[12px]">Install App</p>
      </div>
      <FaRegBell className=" rounded-full text-textColor text-xl" />
      <img
        src={profile}
        alt=""
        className="w-[25px] h-[25px] object-cover rounded-full"
      />
    </div>
  );
};

export default Profile;

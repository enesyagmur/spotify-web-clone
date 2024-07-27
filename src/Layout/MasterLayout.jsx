import React from "react";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

const MasterLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[700px] flex">
        <Sidebar />
        <main className="w-5/6 h-full">{children}</main>
      </div>
      <Player />
    </div>
  );
};

export default MasterLayout;

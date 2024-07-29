import React from "react";
import Player from "../components/Player";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MasterLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <div className="w-full h-screen flex">
        <Sidebar />
        <main className="w-9/12 min-h-screen">{<Outlet />}</main>
      </div>
      <Player />
    </div>
  );
};

export default MasterLayout;

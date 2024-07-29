import React from "react";
import Pages from "./Pages";
import Library from "./Library";

const Sidebar = () => {
  return (
    <div className="w-3/12 h-full bg-black flex flex-col items-center">
      <Pages />
      <Library />
    </div>
  );
};

export default Sidebar;

import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex  items-center justify-center bg-spotifyTheme text-white">
      <div className="w-full lg:w-5/12 h-36 flex flex-col items-center justify-evenly">
        <i className="fa-brands fa-spotify text-4xl text-textColor"></i>
        <p className="text-2xl font-bold">Page not found</p>
        <p className="text-neutral-400 text-[12px]">
          We cant seem to find the page you are looking for
        </p>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import "./playList.scss";
const PlayLists = () => {
  const data = [
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
    "Çalma listem",
  ];
  return (
    <div className="play-lists">
      {data.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default PlayLists;

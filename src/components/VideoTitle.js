import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="pt-[18%] px-20 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 mb-2">{overview}</p>
      <div>
        <Link to={"/watch?v=" + id}>
          <button className="bg-white text-black rounded-lg py-4 px-10 text-xl hover:bg-opacity-50">
            ▶ Play
          </button>
        </Link>
        <button className="bg-gray-500 mx-2 text-white rounded-lg py-4 px-10 text-xl bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

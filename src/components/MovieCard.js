import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-4">
      <img alt="movie poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

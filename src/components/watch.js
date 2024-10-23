import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
const Watch = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("v");
  const [movieKey, setMovieKey] = useState(null);
  useEffect(() => {
    getMovieVideos();
  }, []);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData);
    const filterData = jsonData.results.filter(
      (video) => video?.type === "Featurette"
    );
    const trailer = filterData?.length ? filterData[0] : jsonData.results[0];
    setMovieKey(trailer.key);
  };
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + movieKey + "?autoplay=1&mute=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;

import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};
export default useMovieTrailer;

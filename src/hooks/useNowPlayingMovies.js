import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addnowPlayingMovies(jsonData.results));
  };
};
export default useNowPlayingMovies;

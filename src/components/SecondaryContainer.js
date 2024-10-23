import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMoviesList = useSelector((store) => store.movie.popularMovies);
  const topRatedMoviesList = useSelector((store) => store.movie.topRatedMovies);
  if (
    moviesList === null ||
    popularMoviesList == null ||
    topRatedMoviesList == null
  )
    return;
  return (
    <div className=" bg-black ">
      <div className="-mt-60 relative z-20 pl-10">
        <MovieList title="Now Playing" movies={moviesList} />
        <MovieList title="Top Rated" movies={topRatedMoviesList} />
        {popularMoviesList?.length !== 0 && (
          <MovieList title="Popular" movies={popularMoviesList} />
        )}
        <MovieList title="Hollywodd" movies={moviesList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

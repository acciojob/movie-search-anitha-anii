import React from "react";
import './../styles/App.css';

const Movie = ({ movie }) => {
   
  return (
    <div>
      {/* Do not remove the main div */}
      <ul>
      <li>
        <h2>{movie.Title } {(movie.Year)} </h2>
        <img src={movie.Poster} alt="Movie Poster" />
       </li>
      </ul>
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;



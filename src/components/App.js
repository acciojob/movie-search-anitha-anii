import React, { useState, useEffect } from "react";
import './../styles/App.css';
import MovieList from "./Movie";

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    if (search.trim() !== '') {
      let url = `http://www.omdbapi.com/?s=${search}&apikey=8f2ed0ad`; 
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "False") {
            setError('Invalid movie name. Please try again.');
            setMovies([]); 
          } else {
            setMovies(data.Search); 
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Error fetching data. Please try again.');
          setMovies([]); 
        });
    } else {
      setMovies([]);
    }
  }, [search]);

  return (
    <div>
      {/* Do not remove the main div */}
      <label>Search Movie</label>
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="button" onClick={() => setSearch(search)}>Search</button>
      {error && <p className="error">{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default App;

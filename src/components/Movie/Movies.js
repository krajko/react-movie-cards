import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovie from './AddMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const addMovie = movie => {
    setMovies([movie, ...movies]);
  };

  const deleteMovie = id => {
    setMovies(movies.filter(movie => movie.id != id));
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <AddMovie onAdd={addMovie} />
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} onDelete={deleteMovie} />
        </div>
      </div>
    </div>
  );
};

export default Movies;

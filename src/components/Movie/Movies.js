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

  const rateMovie = (id, rating) => {
    let movie = movies.find(movie => movie.id == id);
    let newRatings = [];

    if (movie.ratings) {
      newRatings = [...movie.ratings, rating];
    } else if (movie.rating) {
      newRatings = [parseInt(movie.rating), rating];
    } else {
      newRatings = [rating];
    }
    movie.ratings = newRatings;

    let sum = movie.ratings.reduce((prev, curr) => prev + curr);
    movie.rating = parseFloat((sum / movie.ratings.length).toFixed(2));

    let newMovies = [...movies];
    let index = movies.indexOf(movie);
    newMovies.splice(index, 1, movie);
    console.log(movie.ratings);
    setMovies(newMovies);
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px', display: 'flex' }}>
      <div style={{ width: '50vw' }}>
        <AddMovie onAdd={addMovie} />
      </div>
      <div className="d-flex flex-row" style={{ width: '50vw' }}>
        <div className="col-sm-12">
          <MovieList movies={movies} onDelete={deleteMovie} onRate={rateMovie} />
        </div>
      </div>
    </div>
  );
};

export default Movies;

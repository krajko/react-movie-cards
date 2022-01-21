import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, onDelete, onRate) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} onDelete={onDelete} onRate={onRate} />
    ))}
  </div>
);

const MovieList = ({ movies, onDelete, onRate }) => <div>{getMovies(movies, onDelete, onRate)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;

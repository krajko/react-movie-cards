import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

import Button from '../UI/Button';
import Popup from '../UI/Popup';

const MovieCard = ({ movie, onDelete, onRate }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} id={movie.id} onRate={onRate} />
            </div>
            <div
              className="card-footer-badge float-right badge badge-primary badge-pill"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              {movie.rating}
            </div>
            <Popup active={showPopup}>
              Ratings: <strong>{movie.ratings ? movie.ratings.length : 1}</strong>
            </Popup>
          </div>
        </div>
        {movie.canDelete ? (
          <Button deleteBtn clicked={() => onDelete(movie.id)}>
            <i class="fa fa-trash fa-lg"></i>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;

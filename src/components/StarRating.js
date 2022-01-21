import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, id, onRate }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div className="stars-container" style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => onRate(id, 1)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => onRate(id, 2)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => onRate(id, 3)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => onRate(id, 4)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => onRate(id, 5)}></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;

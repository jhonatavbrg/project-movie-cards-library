import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: Number,
};

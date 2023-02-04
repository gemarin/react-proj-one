import React from 'react';
import PropTypes from 'prop-types';

Card.defaultProps = { reverse: false };
Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

function Card({ children, reverse }) {
  return (
    <div
      className={`card ${
        reverse && 'reverse'
      }`}
    >
      {children}
    </div>
  );
}

export default Card;

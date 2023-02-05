import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

function Button({
  children,
  version,
  type,
  isDisabled,
}) {
  return (
    <button
      className={`btn btn-${version}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;

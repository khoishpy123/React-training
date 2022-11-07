import React from 'react';
import PropTypes from 'prop-types';

function NormalButton({ onClick, className, text }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
}

NormalButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default NormalButton;

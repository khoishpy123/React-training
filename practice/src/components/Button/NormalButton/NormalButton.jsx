import React from 'react';

function NormalButton({ onClick, className, text }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default NormalButton;

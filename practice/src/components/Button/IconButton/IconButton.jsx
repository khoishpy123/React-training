import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

function IconButton({ isOpen, onClick, icon, className }) {
  return (
    <>
      <button type="button" onClick={onClick} className={className}>
        <Icon icon={icon} />
      </button>
      {isOpen && (
        <DropDownItem dropdownId={dropdownId} onclick={onclickEdit} />
      )}
    </>
  );
}

// IconButton.PropTypes = {
//   onClick: PropTypes.func.isRequired,
//   icon: PropTypes.string.isRequired,
// };

export default IconButton;

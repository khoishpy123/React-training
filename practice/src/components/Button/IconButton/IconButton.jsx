import { React } from 'react';

import { Icon } from '@iconify/react';

import styles from './IconButton.scss';

const IconButton = ({ onClick, icon, className, text, disabled }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        <Icon icon={icon} />
        {text}
      </button>
    </>
  );
};

export default IconButton;

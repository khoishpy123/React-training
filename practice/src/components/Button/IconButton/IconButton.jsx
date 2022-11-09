import { React } from 'react';

import { Icon } from '@iconify/react';

function IconButton({ isOpen, onClick, icon, className }) {
  return (
    <>
      <button type="button" onClick={onClick} className={className}>
        <Icon icon={icon} />
      </button>
      {isOpen && <DropDownItem dropdownId={dropdownId} onclick={onclickEdit} />}
    </>
  );
}

export default IconButton;

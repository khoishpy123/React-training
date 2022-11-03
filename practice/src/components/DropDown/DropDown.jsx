import { useState } from 'react';
import { Icon } from '@iconify/react';
import DropDownContent from '../DropDownContent/DropDownContent';

import styles from '../Table/Table.module.scss';

function DropDown(dropdownId) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className={styles.action_btn} onClick={toggle}>
        <Icon icon="clarity:ellipsis-vertical-line" />
      </button>
      {open && <DropDownContent setOpen={setOpen} dropdownId={dropdownId} />}
    </>
  );
}

export default DropDown;

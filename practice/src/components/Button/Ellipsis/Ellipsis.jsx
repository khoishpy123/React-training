import { useState } from 'react';
import { Icon } from '@iconify/react';
import DropDownItem from '../../DropDownItem/DropDownItem';

import styles from './Ellipsis.module.scss';

function Ellipsis({ dropdownId, onClickE }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div></div>
      <div>
        <button className={styles.action_btn} onClick={toggle}>
          <Icon icon="clarity:ellipsis-vertical-line" />
        </button>
        {isOpen && (
          <DropDownItem
            id={dropdownId}
            onClickDelete={onClickE}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
}

export default Ellipsis;

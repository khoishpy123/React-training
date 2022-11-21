import { useState } from 'react';
import { Icon } from '@iconify/react';

import styles from './DropDownItem.module.scss';

function DropDownItem({ dropdownId, onClickE, onClickEdit }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDelete = () => {
    onClickE(dropdownId);
    setIsOpen(!isOpen);
  };

  const handleClickEdit = () => {
    onClickEdit(dropdownId);
    setIsOpen(!isOpen);
  };

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
          <div className={styles.wrapper}>
            <li
              className={styles.dropDown_Item}
              onClick={handleClickEdit}
            >
              <span>
                <Icon icon="clarity:edit-solid" />
              </span>
              <span>Edit</span>
            </li>
            <li
              className={styles.dropDown_Item}
              onClick={handleClickDelete}
            >
              <span>
                <Icon
                  icon="fluent:delete-12-regular"
                  color="rgb(255, 72, 66)"
                />
              </span>
              <span className={styles.delete_title}>Delete</span>
            </li>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDownItem;

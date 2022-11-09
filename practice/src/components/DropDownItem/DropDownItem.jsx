import React from 'react';

import { Icon } from '@iconify/react';

//styles
import styles from './DropDownItem.module.scss';

const DropDownItem = (props) => {
  const { id, onClickDelete, isOpen, setIsOpen, onClickEdit } = props;

  const handleClickDelete = () => {
    onClickDelete(id);
    setIsOpen(!isOpen);
  };

  const handleClickEdit = () => {
    onClickEdit(id);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <li className={styles.dropDown_Item} onClick={handleClickEdit}>
        <span>
          <Icon icon="clarity:edit-solid" />
        </span>
        <span>Edit</span>
      </li>
      <li className={styles.dropDown_Item} onClick={handleClickDelete}>
        <span>
          <Icon icon="fluent:delete-12-regular" color="rgb(255, 72, 66)" />
        </span>
        <span className={styles.delete_title}>Delete</span>
      </li>
    </div>
  );
};
export default DropDownItem;
